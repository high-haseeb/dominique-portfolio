import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations, useScroll, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials, animations } = useGLTF("models/room_animated.gltf");
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);
  const video = useVideoTexture("/textures/VideoFriends.mp4");
  video.flipY = false;
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      actions[key].play();
      actions[key].setLoop(THREE.LoopOnce, 1);
      actions[key].clampWhenFinished = true;
    });
  }, []);

  const tl = useRef();
  const scroll = useScroll();

  useFrame(({ mouse }) => {
    tl.current.seek(scroll.offset * tl.current.duration());
    ref.current.rotation.y = (mouse.x * Math.PI) / 20;
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    const width = window.innerWidth;
    if (width < 768) {
      tl.current
        .fromTo(ref.current.scale, { x: 0.5, y: 0.5, z: 0.5 }, { duration: 3, x: 0.5, y: 0.5, z: 0.5 }, 0)
        .fromTo(ref.current.position, { x: 0, y: 0, z: 0 }, { duration: 3, x: 0, y: 2, z: 0 }, 0)
        .fromTo(ref.current.position, { x: 30, y: 0, z: 0 }, { duration: 3, x: -2, y: -4, z: 2 }, 3)
        .fromTo(ref.current.scale, { x: 1, y: 1, z: 1 }, { duration: 3, x: 3, y: 3, z: 3 }, 3)
        .fromTo(ref.current.position, { x: -19, y: -7, z: 2 }, { duration: 3, x: 0, y: -13, z: 2 }, 6)
        .fromTo(ref.current.scale, { x: 3, y: 3, z: 3 }, { duration: 3, x: 4, y: 4, z: 4 }, 6);
    } else {
      tl.current
        .fromTo(ref.current.scale, { x: 1, y: 1, z: 1 }, { duration: 3, x: 1, y: 1, z: 1 }, 0)
        .fromTo(ref.current.position, { x: 0, y: 0, z: 0 }, { duration: 3, x: 10 }, 0)
        .fromTo(ref.current.position, { x: 10, y: 0, z: 0 }, { duration: 3, x: -2, y: -4, z: 2 }, 3)
        .fromTo(ref.current.scale, { x: 1, y: 1, z: 1 }, { duration: 3, x: 3, y: 3, z: 3 }, 3)
        .fromTo(ref.current.position, { x: -2, y: -4, z: 2 }, { duration: 3, x: 0, y: -13, z: 2 }, 6)
        .fromTo(ref.current.scale, { x: 3, y: 3, z: 3 }, { duration: 3, x: 4, y: 4, z: 4 }, 6);
    }
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="E27_Ampul_Normal" position={[-2.711, 1.632, 2.348]} rotation={[Math.PI / 2, 0, 0.815]}>
          <mesh name="draht5" geometry={nodes.draht5.geometry} material={nodes.draht5.material} />
          <mesh name="gl_h_draht" geometry={nodes.gl_h_draht.geometry} material={nodes.gl_h_draht.material} />
          <mesh name="st_be" geometry={nodes.st_be.geometry} material={nodes.st_be.material} />
        </group>
        <group name="E27_Ampul_Normal001" position={[-2.711, 1.632, 2.348]} rotation={[Math.PI / 2, 0, 0.815]}>
          <mesh name="draht5001" geometry={nodes.draht5001.geometry} material={nodes.draht5001.material} />
          <mesh name="gl_h_draht001" geometry={nodes.gl_h_draht001.geometry} material={nodes.gl_h_draht001.material} />
          <mesh name="st_be001" geometry={nodes.st_be001.geometry} material={nodes.st_be001.material} />
        </group>
        <group name="E27_Ampul_Normal002" position={[-2.711, 1.632, 2.348]} rotation={[Math.PI / 2, 0, 0.815]}>
          <mesh name="draht5002" geometry={nodes.draht5002.geometry} material={nodes.draht5002.material} />
          <mesh name="gl_h_draht002" geometry={nodes.gl_h_draht002.geometry} material={nodes.gl_h_draht002.material} />
          <mesh name="st_be002" geometry={nodes.st_be002.geometry} material={nodes.st_be002.material} />
        </group>
        <group name="E27_Ampul_Normal003" position={[-2.711, 1.632, 2.348]} rotation={[Math.PI / 2, 0, 0.815]}>
          <mesh name="draht5003" geometry={nodes.draht5003.geometry} material={nodes.draht5003.material} />
          <mesh name="gl_h_draht003" geometry={nodes.gl_h_draht003.geometry} material={nodes.gl_h_draht003.material} />
          <mesh name="st_be003" geometry={nodes.st_be003.geometry} material={nodes.st_be003.material} />
        </group>
        <mesh
          name="Rectangle008"
          geometry={nodes.Rectangle008.geometry}
          material={nodes.Rectangle008.material}
          position={[-3.246, 1.732, 2.807]}
          rotation={[Math.PI / 2, 0, -1.745]}
        />
        <group name="Beditems" position={[-5.142, -3.821, 19.823]} rotation={[2.29, 0.321, -1.37]} scale={0.43}>
          <mesh name="Mesh039" geometry={nodes.Mesh039.geometry} material={materials["Material #26"]} />
          <mesh name="Mesh039_1" geometry={nodes.Mesh039_1.geometry} material={materials["glossy plastic black"]} />
          <mesh name="Mesh039_2" geometry={nodes.Mesh039_2.geometry} material={materials["Material #71"]} />
          <mesh name="Mesh039_3" geometry={nodes.Mesh039_3.geometry} material={materials["Material #40"]} />
          <mesh name="Mesh039_4" geometry={nodes.Mesh039_4.geometry} material={materials["Material #52"]} />
          <mesh name="Mesh039_5" geometry={nodes.Mesh039_5.geometry} material={materials["Material #2235"]} />
          <mesh name="Mesh039_6" geometry={nodes.Mesh039_6.geometry} material={materials["Material #27"]} />
          <mesh name="Mesh039_7" geometry={nodes.Mesh039_7.geometry} material={materials["Material #55"]} />
          <mesh name="Mesh039_8" geometry={nodes.Mesh039_8.geometry} material={materials["Material #2014"]} />
          <mesh name="Mesh039_9" geometry={nodes.Mesh039_9.geometry} material={materials.Chrome} />
        </group>
        <group name="CarpetItems" position={[9.178, -7.751, 6.838]} rotation={[Math.PI / 2, -0.143, -0.756]} scale={0.648}>
          <mesh name="Mesh040" geometry={nodes.Mesh040.geometry} material={materials["Material #57"]} />
          <mesh name="Mesh040_1" geometry={nodes.Mesh040_1.geometry} material={materials["Material #26"]} />
          <mesh name="Mesh040_2" geometry={nodes.Mesh040_2.geometry} material={materials["Material.001"]} />
          <mesh name="Mesh040_3" geometry={nodes.Mesh040_3.geometry} material={materials["Material #2014"]} />
        </group>
        <group name="Screens" position={[0.095, 0, -0.466]} rotation={[0, -0.815, 0]} scale={3.636}>
          <mesh name="Cube023" geometry={nodes.Cube023.geometry} material={materials.grey} />
          <mesh name="Cube023_1" geometry={nodes.Cube023_1.geometry} material={materials["Material.002"]} />
          <mesh name="Cube023_2" geometry={nodes.Cube023_2.geometry} material={materials["Material.016"]} />
          <mesh name="Cube023_3" geometry={nodes.Cube023_3.geometry} material={materials["matt plastic grey.001"]} />
          <mesh name="Cube023_4" geometry={nodes.Cube023_4.geometry} material={materials["matt plastic black.001"]} />
          <mesh name="Cube023_5" geometry={nodes.Cube023_5.geometry} material={materials["glossy plastic black.001"]} />
          <mesh name="Cube023_6" geometry={nodes.Cube023_6.geometry} material={materials["led.001"]} />
          <mesh name="Cube023_7" geometry={nodes.Cube023_7.geometry} material={materials.tastiera} />
          <mesh name="Cube023_8" geometry={nodes.Cube023_8.geometry} material={materials["Material.005"]} />
          <mesh name="Cube023_9" geometry={nodes.Cube023_9.geometry} material={materials.Screen}>
            <meshBasicMaterial map={video} toneMapped={false} />
          </mesh>
        </group>
        <group name="Pictureframes" position={[14.853, 17.32, -10.817]} rotation={[1.593, 0.145, 0.762]} scale={6.489}>
          <mesh name="Plane029" geometry={nodes.Plane029.geometry} material={materials.grey} />
          <mesh name="Plane029_1" geometry={nodes.Plane029_1.geometry} material={materials["Material.013"]} />
          <mesh name="Plane029_2" geometry={nodes.Plane029_2.geometry} material={materials["Material.007"]} />
          <mesh name="Plane029_3" geometry={nodes.Plane029_3.geometry} material={materials["Material.012"]} />
          <mesh name="Plane029_4" geometry={nodes.Plane029_4.geometry} material={materials["Material.011"]} />
          <mesh name="Plane029_5" geometry={nodes.Plane029_5.geometry} material={materials["Material.014"]} />
          <mesh name="Plane029_6" geometry={nodes.Plane029_6.geometry} material={materials["Material.009"]} />
          <mesh name="Plane029_7" geometry={nodes.Plane029_7.geometry} material={materials["Material.008"]} />
          <mesh name="Plane029_8" geometry={nodes.Plane029_8.geometry} material={materials["Material.010"]} />
        </group>
        <group name="Desks" position={[0.771, 6.887, -11.335]} rotation={[-2.172, -0.292, -1.398]} scale={0.398}>
          <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials.white} />
          <mesh name="Cube007_1" geometry={nodes.Cube007_1.geometry} material={materials.Grey} />
          <mesh name="Cube007_2" geometry={nodes.Cube007_2.geometry} material={materials["Mat.3"]} />
          <mesh name="Cube007_3" geometry={nodes.Cube007_3.geometry} material={materials["Material.006"]} />
          <mesh name="Cube007_4" geometry={nodes.Cube007_4.geometry} material={materials["Material.004"]} />
        </group>
        <group name="Cube" position={[-0.014, 0.15, 0.14]} scale={-0.343}>
          <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.Walls} />
          <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials.white} />
        </group>
        <mesh
          name="Body"
          geometry={nodes.Body.geometry}
          material={materials.Walls}
          position={[0.039, 0, -0.139]}
          rotation={[-Math.PI, 0.865, -Math.PI]}
          scale={0.063}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/room_animated.gltf");
