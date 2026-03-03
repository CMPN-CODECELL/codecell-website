import React, { useRef, Suspense, useMemo, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MOBILE_BREAKPOINT = 640;

gsap.registerPlugin(useGSAP);

// ─── Configuration ────────────────────────────────────────────────────────────
const CONFIG = {
    cameraZ: 4,
    cameraFov: 45,

    fillRatio: 0.82,

    /** Max tilt angle in radians (~12°) — rigid plates don't tilt far */
    tiltRange: 0.20,
    /** No positional shift — plate stays mounted in place */
    posShift: 0,
    lightSweep: 4,
    ease: "power3",

    /** Physical plate thickness in world units */
    plateDepth: 0.06,

    /** Corner radius */
    cornerRadius: 0.12,

    /** Front face material — textured */
    front: {
        roughness: 0.3,
        metalness: 0.5,
    },

    /** Edge/side material — bare brushed metal */
    edge: {
        color: "#c0c0c0",
        roughness: 0.25,
        metalness: 0.9,
    },

    /** Lighting */
    ambient: 2.0,
    /** Key light — top‑front, slightly warm */
    spot: {
        intensity: 18,
        distance: 20,
        angle: Math.PI / 3,
        penumbra: 0.8,
        color: "#fff5e6",
        defaultPos: [0, 3, 4],
    },
    /** Fill light — soft bottom kick to lift shadows */
    fill: {
        intensity: 5,
        color: "#d0daf0",
        defaultPos: [0, -2, 3],
    },
};

// ─── Rounded Rectangle Shape ──────────────────────────────────────────────────
function createRoundedRectShape(w, h, r) {
    const hw = w / 2;
    const hh = h / 2;
    r = Math.min(r, hw, hh);

    const shape = new THREE.Shape();
    shape.moveTo(-hw + r, -hh);
    shape.lineTo(hw - r, -hh);
    shape.quadraticCurveTo(hw, -hh, hw, -hh + r);
    shape.lineTo(hw, hh - r);
    shape.quadraticCurveTo(hw, hh, hw - r, hh);
    shape.lineTo(-hw + r, hh);
    shape.quadraticCurveTo(-hw, hh, -hw, hh - r);
    shape.lineTo(-hw, -hh + r);
    shape.quadraticCurveTo(-hw, -hh, -hw + r, -hh);

    return shape;
}

// ─── Inner R3F Scene ──────────────────────────────────────────────────────────
const Scene = ({ src, galleryRef, disableTilt }) => {
    const groupRef = useRef(null);
    const lightRef = useRef(null);

    const texture = useTexture(src);

    const { viewport } = useThree();
    const aspect = texture.image.width / texture.image.height;
    const plateWidth = viewport.width * CONFIG.fillRatio;
    const plateHeight = plateWidth / aspect;

    // Build extruded plate geometry with proper UV mapping
    const { frontGeo, edgeGeo } = useMemo(() => {
        const shape = createRoundedRectShape(plateWidth, plateHeight, CONFIG.cornerRadius);

        const extrudeSettings = {
            depth: CONFIG.plateDepth,
            bevelEnabled: true,
            bevelThickness: 0.005,
            bevelSize: 0.005,
            bevelSegments: 2,
            curveSegments: 16,
        };

        const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);

        // ExtrudeGeometry generates world-space UVs.
        // Remap them to 0–1 based on plate dimensions.
        const pos = geo.attributes.position;
        const uv = geo.attributes.uv;
        const hw = plateWidth / 2;
        const hh = plateHeight / 2;

        for (let i = 0; i < uv.count; i++) {
            uv.setXY(
                i,
                (pos.getX(i) + hw) / plateWidth,
                (pos.getY(i) + hh) / plateHeight
            );
        }
        uv.needsUpdate = true;

        // Separate front face and edge into material groups.
        // ExtrudeGeometry puts: group 0 = front/back faces, group 1 = sides/bevel.
        // We use two materials: [0] = textured front, [1] = metallic edge.
        // The geometry already has groups set up by Three.js.

        return { frontGeo: geo, edgeGeo: null };
    }, [plateWidth, plateHeight]);

    // Materials: [0] = textured front/back, [1] = metallic edges
    const materials = useMemo(() => [
        new THREE.MeshStandardMaterial({
            map: texture,
            roughness: CONFIG.front.roughness,
            metalness: CONFIG.front.metalness,
        }),
        new THREE.MeshStandardMaterial({
            color: CONFIG.edge.color,
            roughness: CONFIG.edge.roughness,
            metalness: CONFIG.edge.metalness,
        }),
    ], [texture]);

    // GSAP cursor tracking (disabled on mobile to avoid lag)
    useGSAP(() => {
        if (disableTilt) return;
        const el = galleryRef?.current;
        if (!el || !groupRef.current || !lightRef.current) return;

        const group = groupRef.current;
        const light = lightRef.current;

        const rotX = gsap.quickTo(group.rotation, "x", { ease: CONFIG.ease, duration: 0.6 });
        const rotY = gsap.quickTo(group.rotation, "y", { ease: CONFIG.ease, duration: 0.6 });
        const litX = gsap.quickTo(light.position, "x", { ease: CONFIG.ease });
        const litY = gsap.quickTo(light.position, "y", { ease: CONFIG.ease });

        const onPointerMove = (e) => {
            const nx = e.clientX / window.innerWidth;
            const ny = e.clientY / window.innerHeight;

            rotX(gsap.utils.interpolate(CONFIG.tiltRange, -CONFIG.tiltRange, ny));
            rotY(gsap.utils.interpolate(-CONFIG.tiltRange, CONFIG.tiltRange, nx));
            litX(gsap.utils.interpolate(-CONFIG.lightSweep, CONFIG.lightSweep, nx));
            litY(gsap.utils.interpolate(CONFIG.lightSweep, -CONFIG.lightSweep, ny));
        };

        const onPointerLeave = () => {
            rotX(0); rotY(0);
            litX(spot.defaultPos[0]); litY(spot.defaultPos[1]);
        };

        el.addEventListener("pointermove", onPointerMove);
        el.addEventListener("pointerleave", onPointerLeave);

        return () => {
            el.removeEventListener("pointermove", onPointerMove);
            el.removeEventListener("pointerleave", onPointerLeave);
        };
    }, { dependencies: [galleryRef] });

    const { spot, fill } = CONFIG;

    return (
        <>
            <ambientLight intensity={CONFIG.ambient} />

            {/* Key light — top-front */}
            <spotLight
                ref={lightRef}
                position={spot.defaultPos}
                intensity={spot.intensity}
                distance={spot.distance}
                angle={spot.angle}
                penumbra={spot.penumbra}
                color={spot.color}
            />

            {/* Fill light — soft bottom kick */}
            <pointLight
                position={fill.defaultPos}
                intensity={fill.intensity}
                color={fill.color}
            />

            <group ref={groupRef} position={[0, 0, -CONFIG.plateDepth / 2]}>
                <mesh geometry={frontGeo} material={materials} />
            </group>
        </>
    );
};

// ─── Public Component ─────────────────────────────────────────────────────────
const TiltImage = ({ src, alt, className, galleryRef }) => {
    const [isMobile, setIsMobile] = useState(
        () => window.innerWidth <= MOBILE_BREAKPOINT,
    );

    useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
        const onChange = (e) => setIsMobile(e.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    return (
        <div
            className={className}
            style={{ aspectRatio: "1.8 / 1", overflow: "visible" }}
            role="img"
            aria-label={alt}
        >
            <Canvas
                camera={{ position: [0, 0, CONFIG.cameraZ], fov: CONFIG.cameraFov }}
                dpr={[1, 2]}
                frameloop={isMobile ? "demand" : "always"}
            >
                <Suspense fallback={null}>
                    <Scene src={src} galleryRef={galleryRef} disableTilt={isMobile} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default TiltImage;
