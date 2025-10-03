import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const VideoModel = () => {
  const divRef = useRef<HTMLDivElement>(null!);
  const div2Ref = useRef<HTMLDivElement>(null!);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#trigger-video",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
    },
  });

  useGSAP(() => {
    gsap.set(divRef.current, { scale: 1.4, transformOrigin: "center center" });

    if (divRef.current) {
      tl.to(divRef.current, {
        scale: 0.63,
        duration: 2,
        ease: "power1.inOut",
      });
    }
    console.log(divRef.current);
  }, [divRef]);

  return (
    <div
      className="h-[200vh] bg-black flex items-end justify-center -mb-15"
      id="trigger-video"
    >
      <div className="sticky bottom-0 w-fit overflow-hidden" ref={div2Ref}>
        <div
          className="object-cover overflow-hidden relative p-4 h-screen"
          ref={divRef}
        >
          <div className="rounded-[100px] w-[95%] mx-auto overflow-hidden h-full">
            <video muted autoPlay loop src="/dham/NewDham.mp4" />
          </div>
          <div className="absolute top-1 left-10 h-full object-contain flex justify-center items-center">
            <img
              src="/icons/phone.png"
              alt="phone image"
              className="h-full block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModel;
