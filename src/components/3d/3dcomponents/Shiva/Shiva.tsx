import { useGLTF } from "@react-three/drei";
import { useEffect, type JSX } from "react";
import * as THREE from "three";

const Shiva = (props: JSX.IntrinsicElements["mesh"]) => {
  const { scene } = useGLTF("/3d/models/lord-shiva/Lord_Shiva.gltf");

  useEffect(() => {
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        const material = object.material as THREE.MeshStandardMaterial;
        material.needsUpdate = true;
      }
    });
  }, [scene]);

  return <primitive {...props} object={scene} />;
};

export default Shiva;
