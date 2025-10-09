import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const VideoModel = () => {
  const divRef = useRef<HTMLDivElement>(null!);
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1536px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#trigger-video",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      gsap.set(divRef.current, {
        scale: 1.9,
        transformOrigin: "center center",
      });
      tl.to(divRef.current, {
        scale: 1,
        duration: 2,
        ease: "power1.inOut",
      });
      return () => {
        tl.kill();
      };
    });
    mm.add("(min-width:1024px) and (max-width: 1535px)", () => {
      gsap.set(divRef.current, {
        scale: 0.8,
        transformOrigin: "center center",
      });
    });
    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#trigger-video",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      gsap.set(divRef.current, {
        scale: 1.9,
        transformOrigin: "center center",
      });
      tl.to(divRef.current, {
        scale: 1,
        duration: 2,
        ease: "power1.inOut",
      });
      return () => {
        tl.kill();
      };
    });
  }, [divRef]);

  return (
    <div className="h-[200vh] flex items-end z-0 bg-black" id="trigger-video">
      <div className="w-full h-screen sticky bottom-0 flex items-center justify-center overflow-hidden">
        <div className="w-7/10 h-fit relative" ref={divRef}>
          <div className="w-full h-fit p-1">
            <img src="/dham/dhamVideo.png" className="rounded-[6vw]" />
          </div>
          <div className="h-full w-full absolute left-0 top-0">
            <img src="/icons/phone.png" alt="phone image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModel;
