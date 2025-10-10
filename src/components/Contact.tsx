import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
const Contact = () => {
  const divRef = useRef<HTMLDivElement>(null!);
  const inputRef1 = useRef<HTMLInputElement>(null!);

  useGSAP(() => {
    gsap.set(divRef.current, { rotation: 0 });
  }, []);

  const handleFocus = (i: number) => {
    const rotation = i === 1 ? 45 : i === 2 ? -10 : 40;
    gsap.to(divRef.current, {
      rotation,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  return (
    <div className="w-full h-[700px] xl:h-[800px] relative bg-black overflow-hidden">
      <div className="h-full w-full">
        <div ref={divRef} className="origin-[top_center]">
          <img src="/icons/rays.png" alt="rays" className="opacity-60" />
        </div>
      </div>
      <div className="w-2/3 h-3/4 absolute bottom-0 left-1/2 -translate-x-1/2">
        <h3 className="text-6xl text-center pt-10 font-bold">GET IN TOUCH</h3>
        <p className="w-1/2 text-center mx-auto py-5 text-[#FF8127]">
          join the Ranks of those who demand the best. Upgrade your experience
          today!
        </p>
        <div className="flex gap-5">
          <input
            ref={inputRef1}
            placeholder="Enter your Name"
            onFocus={() => handleFocus(1)}
            className="border-1 border-[#FF8127] bg-[#FF8127]/20 w-full outline-0 ps-20 pe-3 py-3 rounded-2xl"
            type="text"
          />
          <input
            placeholder="Enter your Email id"
            onFocus={() => handleFocus(2)}
            className="border-1 border-[#FF8127] bg-[#FF8127]/20 w-full outline-0 ps-20 pe-3 py-3 rounded-2xl"
            type="text"
          />
        </div>
        <div className="pt-10">
          <textarea
            placeholder="Enter your Message"
            onFocus={() => handleFocus(3)}
            name="message"
            id=""
            rows={4}
            className="border-1 border-[#FF8127] bg-[#FF8127]/20 w-full outline-0 ps-20 pe-3 py-3 rounded-2xl"
          ></textarea>
          <button
            type="submit"
            className="px-10 py-3 rounded-full border-[#FF8127] bg-[#FF8127]/20 mx-auto block mt-5"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
