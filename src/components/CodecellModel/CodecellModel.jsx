import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import CodeCell3D from "../../../public/Codecell3D/Codecell3D.jsx";

const CodecellModel = () => {
  let scale = [2, 2, 2];
  if (window.innerWidth < 1100) {
    scale = [2.5, 2.5, 2.5];
  }
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls
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
