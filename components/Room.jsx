import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useVideoTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/finale.glb");
  const video = useVideoTexture("/textures/VideoFriends.mp4");
  video.flipY = false;
  const body = useRef();
  const pictures = useRef();
  const screens = useRef();
  const carpet = useRef();
  const cube = useRef();
  const tables = useRef();
  const bed = useRef();
  const room = useRef();
  const tl = gsap.timeline();
  useEffect(() => {
    // room.current.visible = false;
    cube.current.rotation.y = Math.PI / 2;
    cube.current.rotation.x = Math.PI / 2;
  }, []);
  useFrame(() => { });
  useGSAP(() => {
    tl.to(cube.current.position, { x: -1, y: 0, z: 0 });
  });

  return (
    <>
      <group {...props} dispose={null} ref={room}>
        <group position={[-2.711, 1.632, 2.348]} rotation={[Math.PI / 2, 0, 0.815]}>
          <mesh geometry={nodes.draht5.geometry} material={nodes.draht5.material} />
          <mesh geometry={nodes.gl_h_draht.geometry} material={nodes.gl_h_draht.material} />
          <mesh geometry={nodes.st_be.geometry} material={nodes.st_be.material} />
        </group>
        <group position={[-2.711, 1.632, 2.348]} rotation={[Math.PI / 2, 0, 0.815]} ref={pictures}>
          <mesh geometry={nodes.draht5001.geometry} material={nodes.draht5001.material} />
          <mesh geometry={nodes.gl_h_draht001.geometry} material={nodes.gl_h_draht001.material} />
          <mesh geometry={nodes.st_be001.geometry} material={nodes.st_be001.material} />
        </group>
        <group position={[-2.711, 1.632, 2.348]} rotation={[Math.PI / 2, 0, 0.815]}>
          <mesh geometry={nodes.draht5002.geometry} material={nodes.draht5002.material} />
          <mesh geometry={nodes.gl_h_draht002.geometry} material={nodes.gl_h_draht002.material} />
          <mesh geometry={nodes.st_be002.geometry} material={nodes.st_be002.material} />
        </group>
        <group position={[-2.711, 1.632, 2.348]} rotation={[Math.PI / 2, 0, 0.815]}>
          <mesh geometry={nodes.draht5003.geometry} material={nodes.draht5003.material} />
          <mesh geometry={nodes.gl_h_draht003.geometry} material={nodes.gl_h_draht003.material} />
          <mesh geometry={nodes.st_be003.geometry} material={nodes.st_be003.material} />
        </group>
        <mesh
          geometry={nodes.Rectangle008.geometry}
          material={nodes.Rectangle008.material}
          position={[-3.246, 1.732, 2.807]}
          rotation={[Math.PI / 2, 0, -1.745]}
        />
        <group position={[7.359, 0.187, 1.743]} rotation={[Math.PI / 2, 0, -0.756]} ref={bed}>
          <mesh geometry={nodes.Mesh039.geometry} material={materials["Material #26"]} />
          <mesh geometry={nodes.Mesh039_1.geometry} material={materials["glossy plastic black"]} />
          <mesh geometry={nodes.Mesh039_2.geometry} material={materials["Material #71"]} />
          <mesh geometry={nodes.Mesh039_3.geometry} material={materials["Material #40"]} />
          <mesh geometry={nodes.Mesh039_4.geometry} material={materials["Material #52"]} />
          <mesh geometry={nodes.Mesh039_5.geometry} material={materials["Material #2235"]} />
          <mesh geometry={nodes.Mesh039_6.geometry} material={materials["Material #27"]} />
          <mesh geometry={nodes.Mesh039_7.geometry} material={materials["Material #55"]} />
          <mesh geometry={nodes.Mesh039_8.geometry} material={materials["Material #2014"]} />
          <mesh geometry={nodes.Mesh039_9.geometry} material={materials.Chrome} />
        </group>
        <group position={[7.284, 0.161, 1.814]} rotation={[Math.PI / 2, 0, -0.756]} ref={carpet}>
          <mesh geometry={nodes.Mesh040.geometry} material={materials["Material #57"]} />
          <mesh geometry={nodes.Mesh040_1.geometry} material={materials["Material #26"]} />
          <mesh geometry={nodes.Mesh040_2.geometry} material={materials.Material} />
          <mesh geometry={nodes.Mesh040_3.geometry} material={materials["Material #2014"]} />
        </group>
        <group position={[0.095, 0, -0.466]} rotation={[0, -0.815, 0]} ref={screens}>
          <mesh geometry={nodes.Cube023.geometry} material={materials.grey} />
          <mesh geometry={nodes.Cube023_1.geometry} material={materials["Material.001"]} />
          <mesh geometry={nodes.Cube023_2.geometry} material={materials["Material.016"]} />
          <mesh geometry={nodes.Cube023_3.geometry} material={materials["matt plastic grey.001"]} />
          <mesh geometry={nodes.Cube023_4.geometry} material={materials["matt plastic black.001"]} />
          <mesh geometry={nodes.Cube023_5.geometry} material={materials["glossy plastic black.001"]} />
          <mesh geometry={nodes.Cube023_6.geometry} material={materials["led.001"]} />
          <mesh geometry={nodes.Cube023_7.geometry} material={materials.tastiera} />
          <mesh geometry={nodes.Cube023_8.geometry} material={materials["Material.005"]} />
          <mesh geometry={nodes.Cube023_9.geometry}>
            <meshBasicMaterial map={video} toneMapped={false} />
          </mesh>
        </group>
        <group position={[1.692, 2.423, -3.949]} rotation={[Math.PI / 2, 0, 0.815]} ref={pictures}>
          <mesh geometry={nodes.Plane029.geometry} material={materials.grey} />
          <mesh geometry={nodes.Plane029_1.geometry} material={materials["Material.013"]} />
          <mesh geometry={nodes.Plane029_2.geometry} material={materials["Material.007"]} />
          <mesh geometry={nodes.Plane029_3.geometry} material={materials["Material.012"]} />
          <mesh geometry={nodes.Plane029_4.geometry} material={materials["Material.011"]} />
          <mesh geometry={nodes.Plane029_5.geometry} material={materials["Material.014"]} />
          <mesh geometry={nodes.Plane029_6.geometry} material={materials["Material.009"]} />
          <mesh geometry={nodes.Plane029_7.geometry} material={materials["Material.008"]} />
          <mesh geometry={nodes.Plane029_8.geometry} material={materials["Material.010"]} />
        </group>
        <group position={[-3.756, 1.682, -1.366]} rotation={[0, -0.815, 0]} ref={tables}>
          <mesh geometry={nodes.Cube007.geometry} material={materials.white} />
          <mesh geometry={nodes.Cube007_1.geometry} material={materials.Grey} />
          <mesh geometry={nodes.Cube007_2.geometry} material={materials["Mat.3"]} />
          <mesh geometry={nodes.Cube007_3.geometry} material={materials["Material.006"]} />
          <mesh geometry={nodes.Cube007_4.geometry} material={materials["Material.004"]} />
        </group>
        <mesh geometry={nodes.Body.geometry} material={materials.Walls} position={[0.039, 0, -0.139]} rotation={[0, -0.815, 0]} ref={body} />
      </group>

      <group position={[-0.014, 0.524, -7.891]} ref={cube}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Walls} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.white} />
      </group>
    </>
  );
}

useGLTF.preload("/models/finale.glb");
