import React, { useRef } from "react";

import moonScene from "../assets/3d/moon.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Moon = ({ isRotating, ...props }) => {
  const { nodes, materials } = useGLTF(moonScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });
  const moonMaterials = Object.values(materials);
  moonMaterials.forEach((material) => {
    material.emissive = new THREE.Color("#f0c420"); // Couleur de l'émission, blanc dans cet exemple
    material.emissiveIntensity = 0.9; // Intensité de l'émission, ajustez selon vos préférences
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.moon}
        position={[-1.589, -0.597, 0.3]}
        rotation={[0, 0, 0.475]}
        scale={[2.641, 3.018, 2.641]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.moon}
        position={[3.802, 0.231, -0.306]}
        scale={[0.166, 0.166, 0.109]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.moon}
        position={[2.223, 1.083, -1.006]}
        scale={[0.22, 0.22, 0.144]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.moon}
        position={[2.287, -1.216, 0.664]}
        scale={[0.155, 0.155, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.nuven}
        position={[-1.958, -1.965, 3.022]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.413, 1.436, 1.436]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.nuven}
        position={[2.779, -0.948, -3.138]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-1.809, 1.436, 1.436]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.nuven}
        position={[3.44, -2.686, 3.101]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.748, 1.436, 1.436]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.nuven}
        position={[-3.279, 0.643, -0.481]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-1.753, 1.436, 1.436]}
      />
    </group>
  );
};

export default Moon;
