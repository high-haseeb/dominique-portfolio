"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Environment, OrthographicCamera, ScrollControls } from "@react-three/drei";
import { Model } from "./Room_animated";
import { Overlay } from "./Overlay";
import TextAnimation from "./TextAnimation";

const Experience = () => {
  let aspect = 0;
  useEffect(() => {
    if(window){
      aspect = window.innerWidth / window.innerHeight;
    }
  })
  const frustum = 5;

  return (
    <div className="w-screen h-screen">
      <Canvas className="bg-white" camera={{ position: [0, 10, 20] }}>
        <OrthographicCamera
          makeDefault
          rotation={[-Math.PI / 8, 0, 0]}
          position={[0, 4.5, 5]}
          zoom={50}
          args={[(-aspect * frustum) / 2, (aspect * frustum) / 2, frustum / 2, -frustum / 2, -50, 50]}
        />
        <Environment preset="warehouse" />
        <ScrollControls pages={13} damping={0.25} maxSpeed={0.3}>
          <Overlay />
          <Model />
        </ScrollControls>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default Experience;
