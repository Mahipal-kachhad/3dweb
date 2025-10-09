import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const RotatingBackground = () => {
  const texture = useLoader(RGBELoader, "/3d/models/01.hdr");
  const meshRef = useRef<THREE.Mesh>(null!);

  // configure the HDR texture
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.02; // adjust speed
    }
  });

  return (
    <mesh ref={meshRef} scale={-1}>
      <sphereGeometry args={[50, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};

export default RotatingBackground
