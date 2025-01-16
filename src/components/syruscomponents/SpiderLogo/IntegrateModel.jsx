import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Spiderman from "../../../../public/Spiderman/Syrus3D/Syrus3D/Syrus";

function IntegrateModel() {
  const controlsRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  let scale = [1, 1, 1];
  if (window.innerWidth < 1100) {
    scale = [1, 1, 1];
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Canvas>
        <ambientLight />
        <Environment preset="sunset" />
        {!isMobile && (
          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 2}
            maxAzimuthAngle={Math.PI / 2}
          />
        )}
        <PerspectiveCamera makeDefault position={[0, 0, 1.2]} fov={60} zoom={1} />

        <Suspense fallback={null}>
          <Spiderman position={[0, -1.3, 0]} scale={scale} />
        </Suspense>
      </Canvas>
    </>
  );
}

export default IntegrateModel;
