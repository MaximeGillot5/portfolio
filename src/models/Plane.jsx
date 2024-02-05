import React, { useEffect, useRef } from "react";

import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    // Affichez les noms des animations dans la console pour vérification
    const animationNames = Object.keys(animations);
    console.log("Animation Names:", animationNames);

    if (isRotating) {
      // Assurez-vous que "metarig" est le bon nom d'animation
      if (actions["metarig|metarigAction.001"]) {
        actions["metarig|metarigAction.001"].play();
      } else {
        console.error("Animation 'mmm' not found!");
      }
    } else {
      if (actions["metarig|metarigAction.001"]) {
        actions["metarig|metarigAction.001"].play();
      } else {
        console.error("Animation 'vvv' not found!");
      }
    }
  }, [actions, animations, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
