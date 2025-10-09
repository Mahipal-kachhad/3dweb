import { useGLTF } from "@react-three/drei";
import type { JSX } from "react";

const Maa = (props: JSX.IntrinsicElements["mesh"]) => {
  const { scene } = useGLTF("/3d/models/maa/maa.glb");
  return <primitive {...props} object={scene} />;
};

export default Maa;
