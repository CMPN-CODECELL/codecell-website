import React, { useRef, useState } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import CodeCell3D from "../../../public/Codecell3D/Codecell3D.jsx";

const CodecellModel = () => {
  // const controlsRef = useRef();
  // const lastPointer = useRef({ x: 0, y: 0 });
  // const [isDragging, setIsDragging] = useState(false);

  // const handlePointerDown = (e) => {
  //   e.preventDefault();
  //   lastPointer.current = { x: e.clientX, y: e.clientY };
  //   setIsDragging(true);
  // };

  // const handlePointerMove = (e) => {
  //   if (!isDragging) return;

  //   const deltaY = lastPointer.current.y - e.clientY; // Detect vertical drag

  //   if (Math.abs(deltaY) > 0) {
  //     window.scrollBy(0, deltaY); // Scroll the page based on vertical drag
  //     lastPointer.current = { x: e.clientX, y: e.clientY }; // Update last pointer position
  //   }
  // };

  // const handlePointerUp = () => {
  //   setIsDragging(false); // Stop dragging when pointer is released
  // };

  let scale = [2, 2, 2];
  if (window.innerWidth < 1100) {
    scale = [2.5, 2.5, 2.5];
  }
  return (
    <>
      <Canvas
        style={{}}
        // onPointerDown={handlePointerDown}
        // onPointerMove={handlePointerMove}
        // onPointerUp={handlePointerUp}
      >
        <ambientLight />
        <OrbitControls
          // ref={controlsRef}
          // enabled={false}
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableRotate={true}
        />
        <Suspense fallback={null}>
          <CodeCell3D scale={scale} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default CodecellModel;
