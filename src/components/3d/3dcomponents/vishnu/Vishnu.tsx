import { useGLTF } from "@react-three/drei";
import { useEffect, type JSX } from "react";
import { Mesh, MeshStandardMaterial } from "three";

const Vishnu = (props: JSX.IntrinsicElements["mesh"]) => {
  const { scene } = useGLTF("/3d/models/lord-vishnu/Lord_Vishnu.gltf");
  useEffect(() => {
      scene.traverse((object) => {
        if (object instanceof Mesh) {
          const material = object.material as MeshStandardMaterial;
          material.needsUpdate = true;
        }
      });
    }, [scene]);
  return <primitive {...props} object={scene} />;
};

export default Vishnu;
