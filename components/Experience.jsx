"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Environment, OrthographicCamera, ScrollControls } from "@react-three/drei";
import { Model } from "./Room_animated";
import { Overlay } from "./Overlay";
import TextAnimation from "./TextAnimation";

const Experience = () => {
  const frustum = 5;
  let aspect = 0;

  const [darkMode, setDarkMode] = React.useState(false);
  useEffect(() => {
    if (window) {
      aspect = window.innerWidth / window.innerHeight;
    }
  }, []);

  useEffect(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.theme = darkMode ? "dark" : "light";
  }, [darkMode]);
  const toggleCircle = React.useRef(null);

  const sunLightColor = darkMode ? [0.17254901960784313, 0.23137254901960785, 0.6862745098039216] : [1, 1, 1];
  const ambientColor = darkMode ? [0.17254901960784313, 0.23137254901960785, 0.6862745098039216] : [1, 1, 1];
  const sunLightIntensity = darkMode ? 0.78 : 3;
  const ambientIntensity = darkMode ? 0.78 : 1;

  return (
    <div className="w-screen h-screen">
      <div class="toggle-bar ">
        <div class="sun-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              fill="currentColor"
              d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"
            />
          </svg>
        </div>
        <button
          class="toggle-button"
          onClick={() => {
            if (toggleCircle.current) {
              toggleCircle.current.classList.toggle("slide");
              setDarkMode(!darkMode);
            }
          }}
        >
          <div class="toggle-circle" ref={toggleCircle}></div>
        </button>
        <div class="moon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              fill="currentColor"
              d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"
            />
          </svg>
        </div>
      </div>
      <Canvas className="bg-white" camera={{ position: [0, 10, 20] }}>
        <OrthographicCamera
          makeDefault
          rotation={[-Math.PI / 8, 0, 0]}
          position={[0, 4.5, 5]}
          zoom={50}
          args={[(-aspect * frustum) / 2, (aspect * frustum) / 2, frustum / 2, -frustum / 2, -50, 50]}
        />
        {/* <Environment preset={`${darkMode ? "warehouse" : 'night'}`} /> */}
        <directionalLight
          castShadow
          position={[-1.5, 7, 3]}
          intensity={sunLightIntensity}
          color={sunLightColor}
          shadow-mapSize={[2048, 2048]}
          shadow-normalBias={0.05}
          shadow-camera-far={20}
        />
        <ambientLight intensity={ambientIntensity} color={ambientColor} />
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
