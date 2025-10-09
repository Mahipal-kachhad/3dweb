import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { gsap, type DOMTarget } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Maa from "./Maa/Maa";
import { AuraCircle } from "./Maa/MaaAura";
import Shiva from "./Shiva/Shiva";
import Bramha from "./bramha/Bramha";
import Vishnu from "./vishnu/Vishnu";
import Cube from "./bramha/Cube";
import Galaxy from "./Galaxy/Galaxy";
import { useAnimation } from "./animations/useAnimation";
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";
import { Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import RotatingBackground from "./RotatingBackground";

const Experience = ({ scroller }: { scroller: DOMTarget }) => {
  const galaxyRef = useRef<THREE.Group>(null!);
  const lightRef = useRef<THREE.DirectionalLight>(null!);
  const lightBRef = useRef<THREE.DirectionalLight>(null!);
  const auraRef = useRef<THREE.Group>(null!);
  const maaRef = useRef<THREE.Group>(null!);
  const trishul = useRef<THREE.Mesh>(null!);
  const chakra = useRef<THREE.Mesh>(null!);
  const veda = useRef<THREE.Mesh>(null!);
  const bramhaRef = useRef<THREE.Mesh>(null!);
  const vishnuRef = useRef<THREE.Mesh>(null!);
  const shivaRef = useRef<THREE.Mesh>(null!);
  const [isBloom, setBloom] = useState<Boolean>(false);

  const { camera, scene } = useThree();

  const animationTl = useAnimation(
    camera,
    lightRef,
    lightBRef,
    auraRef,
    bramhaRef,
    vishnuRef,
    shivaRef,
    trishul,
    chakra,
    veda
  );

  useGSAP(
    () => {
      const masterTl = gsap.timeline();

      masterTl.add(animationTl.play());

      ScrollTrigger.create({
        animation: masterTl,
        trigger: "#animation-trigger",
        scroller: scroller,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      });

      ScrollTrigger.create({
        trigger: "#animation-trigger",
        scroller: scroller,

        start: "0 center",
        end: "27% center",

        onToggle: (self) => setBloom(self.isActive),
      });
    },
    { dependencies: [scroller, animationTl] }
  );

  // useFrame((state, delta) => {
  //   if (scene.background && 'isTexture' in scene.background) {
  //     (scene.background as THREE.Texture).matrix.rotate(delta * 0.05);
  //   }
  // });


  return (
    <>
      <group layers={2}>
        <directionalLight
          ref={lightRef}
          position={[5, 5, 5]}
          intensity={1.5}
          color="#ffffff"
          castShadow
        />
        <directionalLight
          ref={lightBRef}
          position={[0, 1, -1]}
          intensity={1.5}
          color="#ffffff"
          castShadow
        />
        <mesh layers={2} ref={maaRef}>
          <Maa position={[0, -1, 0]} scale={0.008} />
          <AuraCircle ref={auraRef} />
        </mesh>
        <mesh layers={2}>
          <Shiva
            ref={shivaRef}
            scale={0.15}
            position={[1.3, -0.29, 3]}
            rotation-y={3.5}
          />
          <Bramha
            ref={bramhaRef}
            scale={0.18}
            position={[0, -0.29, 3.1]}
            rotation-y={Math.PI}
          />
          <Vishnu
            ref={vishnuRef}
            scale={0.22}
            position={[-1.3, -0.29, 3.1]}
            rotation-y={2.87}
          />
          <Cube position={[-0.2, 0.1, 0.2]} scale={0.3} ref={trishul} />
          <Cube position={[-0.2, 0.1, 0.2]} scale={0.3} ref={chakra} />
          <Cube position={[-0.2, 0.1, 0.2]} scale={0.3} ref={veda} />
        </mesh>
      </group>
      <group layers={1}>
        <Galaxy
          ref={galaxyRef}
          position={[-2.9, -2.9, 14]}
          scale={2}
          castShadow={false}
          receiveShadow={false}
        />
      </group>
      <RotatingBackground />
      {/* <Environment files={"/3d/models/01.hdr"} background/> */}
      {/* <EffectComposer>
        {isBloom && (
          <EffectComposer resolutionScale={0.5}>
            <Bloom
              luminanceThreshold={0.3}
              intensity={4}
              radius={0.9}
              mipmapBlur
            />
            <BrightnessContrast brightness={0.2} contrast={0.44} />
            <HueSaturation saturation={0.3} />
          </EffectComposer>
        )}
      </EffectComposer> */}
    </>
  );
};

export default Experience;
