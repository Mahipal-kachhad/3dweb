import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame, type Camera } from "@react-three/fiber";
import { Group, Material, Mesh, Vector3, type DirectionalLight } from "three";
import { Dispatch, SetStateAction, useMemo, type RefObject } from "react";

type ModelRef = RefObject<Group | Mesh>;

export const useAnimation = (
  camera: Camera,
  light: RefObject<DirectionalLight>,
  lightB: RefObject<DirectionalLight>,
  AuraRef: RefObject<Group>,
  bramha: ModelRef,
  vishnu: ModelRef,
  shiva: ModelRef,
  trishul: RefObject<Mesh>,
  chakra: RefObject<Mesh>,
  veda: RefObject<Mesh>,
) => {
  const tl = gsap.timeline({ paused: true });
  const lookAtTarget = useMemo(() => new Vector3(0, 0, 0), []);

  useGSAP(
    () => {
      const [burst, circle] = AuraRef.current.children as Mesh[];
      const models = [bramha.current, vishnu.current, shiva.current];
      const materials: Material[] = [];

      models.forEach((model) => {
        if (model) {
          model.traverse((child) => {
            if (child instanceof Mesh && child.material) {
              if (!materials.includes(child.material)) {
                materials.push(child.material);
              }
            }
          });
        }
      });

      gsap.set(camera.position, { x: 0, y: 0, z: 14 });
      gsap.set(camera, {
        fov: 120,
        near: 0.02,
        onUpdate: () => camera.updateProjectionMatrix(),
      });
      gsap.set(light.current, { intensity: 0 });
      gsap.set(lightB.current, { intensity: 0 });
      gsap.set(materials, {
        transparent: true,
        needsUpdate: true,
        opacity: 0,
      });

      tl.to(camera.position, {
        z: 6.4,
        duration: 5.5,
        ease: "power1.Out",
      });

      tl.to(
        camera,
        {
          fov: 19,
          ease: "power1.Out",
          duration: 0.01,
          onUpdate: () => camera.updateProjectionMatrix(),
        },
        "-=0.01"
      );
      tl.to(circle.scale, {
        x: 0.32,
        y: 0.32,
        duration: 2,
        ease: "power2.Out",
      }).to(
        circle.material,
        {
          opacity: 1,
          duration: 2,
          ease: "power2.Out",
        },
        "<"
      );

      tl.to(
        burst.scale,
        {
          x: 1,
          y: 1,
          duration: 2,
          ease: "power2.inOut",
        },
        "-=1.5"
      ).to(
        burst.material,
        {
          opacity: 1,
          duration: 2,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.to(light.current, { intensity: 3, duration: 3, ease: "power2.inOut" });

      tl.to(camera.position, {
        x: -4.6,
        y: 0.9,
        z: 6.3,
        duration: 3,
        ease: "power1.inOut",
      });
      tl.to(
        lookAtTarget,
        { x: 0, y: 0, z: 2, duration: 3, ease: "power1.inOut" },
        "<"
      );
      tl.to(lightB.current, {
        intensity: 2,
        duration: 2,
        ease: "power1.inOut",
      });

      if (materials.length > 0) {
        tl.to(
          materials,
          {
            opacity: 1,
            duration: 2,
            needsUpdate: true,
          },
          "<+=1"
        );
      }
      tl.to(trishul.current.position, {
        x: -1.25,
        y: 0.2,
        z: 2.92,
        ease: "power1.inOut",
        duration: 3,
      });
      tl.to(
        veda.current.position,
        {
          x: -0.13,
          y: 0.2,
          z: 2.87,
          ease: "power1.inOut",
          duration: 3,
        },
        "<"
      );
      tl.to(
        chakra.current.position,
        {
          x: 1.43,
          y: 0.1,
          z: 2.82,
          ease: "power1.inOut",
          duration: 3,
        },
        "<"
      );
      tl.to(
        [light.current, lightB.current],
        { intensity: 0, duration: 0.7, ease: "power1.out" },
        "+=2"
      );
      tl.to(
        [circle.material, burst.material],
        { opacity: 0, duration: 0.7, ease: "power1.out" },
        "<"
      );
    },
    { dependencies: [camera] }
  );

  useFrame(() => {
    camera.lookAt(lookAtTarget);
  });

  return tl;
};
