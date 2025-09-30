import type { JSX } from "react";

const Cube = (props:JSX.IntrinsicElements["mesh"]) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[0.1, 0.5, 0.1]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Cube;
