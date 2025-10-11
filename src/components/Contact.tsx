import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const Contact = () => {
  const divRef = useRef<HTMLDivElement>(null!);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(data);
    setData({
      name: "",
      email: "",
      message: "",
    });
    gsap.to(divRef.current, { rotation: 0, duration: 0.5 });
  };

  useGSAP(() => {
    gsap.set(divRef.current, { rotation: 0 });
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));

    let baseRotation = 0;

    switch (name) {
      case "name":
        baseRotation = 50;
        break;
      case "email":
        baseRotation = -20;
        break;
      case "message":
        baseRotation = 45;
        break;
      default:
        baseRotation = 0;
    }

    const newRotation = baseRotation - value.length / 1.3;

    gsap.to(divRef.current, {
      rotation: newRotation,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleFocus = (i: number) => {
    let rotation: number;
    let currentLength = 0;

    if (i === 1) {
      rotation = 50;
      currentLength = data.name.length;
    } else if (i === 2) {
      rotation = -20;
      currentLength = data.email.length;
    } else if (i === 3) {
      rotation = 45;
      currentLength = data.message.length;
    } else {
      rotation = 0;
    }

    gsap.to(divRef.current, {
      rotation: rotation - currentLength / 1.3,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  const handleBlur = () => {
    gsap.to(divRef.current, {
      rotation: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  return (
    <div className=" bg-black">
      <div className="w-[85vw] mx-auto max-w-6xl h-[700px] xl:h-[800px] relative bg-black">
        <div className="h-full w-full pt-10 relative">
          <div ref={divRef} className="origin-[top_center] w-[300px] mx-auto">
            <img src="/icons/bulb.png" alt="rays" />
          </div>
          <div className="absolute -top-2 rounded-b-full w-[5px] h-[50px] border-1 border-white/20 left-1/2 -translate-x-1/2 " />
        </div>
        <div className="w-full h-3/4 absolute bottom-0 left-1/2 -translate-x-1/2">
          <h3 className="text-6xl text-center pt-10 font-bold">GET IN TOUCH</h3>
          <p className="w-1/2 text-center mx-auto py-5 text-[#FF8127]">
            join the Ranks of those who demand the best. Upgrade your experience
            today!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-5">
              <input
                name="name"
                placeholder="Enter your Name"
                onFocus={() => handleFocus(1)}
                onBlur={handleBlur}
                value={data.name}
                onChange={handleChange}
                className="border-1 border-[#FF8127] bg-[#FF8127]/20 w-full outline-0 ps-20 pe-3 py-3 rounded-2xl"
                type="text"
              />
              <input
                name="email"
                value={data.email}
                placeholder="Enter your Email id"
                onFocus={() => handleFocus(2)}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border-1 border-[#FF8127] bg-[#FF8127]/20 w-full outline-0 ps-20 pe-3 py-3 rounded-2xl"
                type="text"
              />
            </div>
            <div className="pt-10">
              <textarea
                value={data.message}
                placeholder="Enter your Message"
                onFocus={() => handleFocus(3)}
                onBlur={handleBlur}
                onChange={handleChange}
                name="message"
                id=""
                rows={4}
                className="border-1 border-[#FF8127] bg-[#FF8127]/20 w-full outline-0 ps-20 pe-3 py-3 rounded-2xl"
              ></textarea>
              <button
                onMouseEnter={() => handleFocus(4)}
                onMouseLeave={handleBlur}
                type="submit"
                className="px-20 py-3 rounded-full cursor-pointer hover:bg-white/13 transition ease-in active:bg-white/5 bg-white/7 backdrop-blur-[5px] border-t-white/20 border-t-1 border-l-white/20 border-l-1 mx-auto block mt-5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
