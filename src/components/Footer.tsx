import { AiOutlineYoutube } from "react-icons/ai";
import { BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { LuFacebook } from "react-icons/lu";
import { MdLocationPin, MdOutlineLiveTv } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black border-t-1 border-t-white/10">
      <div className="flex gap-10 w-[85vw] max-w-7xl mx-auto mt-10 pb-15 border-b-1 border-b-white/10 ">
        <div className="w-full">
          <h2 className=" text-lg lg:text-2xl 2xl:text-3xl font-bold text-[#FF8127]">
            Maa Vishvambhari TirthYatra Dham
          </h2>
          <p className="py-5 text-[#cbcbcb] text-sm lg:text-md xl:text-lg">
            A sacred place of divine connection and spiritual growth. Join us in
            celebrating the eternal presence of Maa Vishvambhari and experience
            the profound peace and blessings of this holy sanctuary.
          </p>
          <div className="flex gap-3 items-center">
            <span>Follow us:</span>
            <div className="flex gap-5 text-[#FF8127] items-center">
              {" "}
              <AiOutlineYoutube className="text-4xl" />
              <BsInstagram className="text-3xl" />
              <LuFacebook className="text-4xl" />
              <MdOutlineLiveTv className="text-4xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 w-md text-sm lg:text-lg">
          <h3 className="text-lg xl:text-xl font-bold mb-1 lg:mb-3">Quick Links</h3>
          <a href="#" className="text-[#cbcbcb]">
            Darshan Timings
          </a>
          <a href="#" className="text-[#cbcbcb]">
            Events & Satsang
          </a>
          <a href="#" className="text-[#cbcbcb]">
            Photo Gallery
          </a>
          <a href="#" className="text-[#cbcbcb]">
            Location & Contact
          </a>
          <a href="#" className="text-[#cbcbcb]">
            Our Pillars
          </a>
        </div>
        <div className="w-md">
          <h3 className="text-xl font-bold mb-3 text-md lg:text-lg xl:text-xl">Contact info</h3>
          <div className="flex gap-2 py-1 lg:py-3">
            <div className="p-2">
              <BsTelephoneFill className="text-sm text-[#FF8127]" />
            </div>
            <div>
              <p className="font-bold text-[0.75rem] lg:text-lg text-[#cbcbcb]">
                +91 72030 25755
              </p>
              <p className="text-[0.7rem] lg:text-sm text-[#686868]">
                Mon-Fri From 8:00 AM to 5:00 PM
              </p>
            </div>
          </div>
          <div className="flex gap-2 py-1 lg:py-3">
            <div className="p-1">
              <HiMail className="text-xl lg:text-2xl text-[#FF8127]" />
            </div>
            <div>
              <p className="font-bold text-[0.75rem] lg:text-lg text-[#cbcbcb]">
                maavishvambhari@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-2 py-1 lg:py-3">
            <div className="p-1">
              <MdLocationPin className="text-xl lg:text-2xl text-[#FF8127]" />
            </div>
            <div>
              <p className="font-bold text-[0.75rem] lg:text-lg text-[#cbcbcb]">
                Rabada - 396055
              </p>
              <p className=" text-[0.7rem] lg:text-sm text-[#686868]">
                Ta. & Dist. Valsad (Guj-IND)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[85vw] max-w-7xl mx-auto py-10 text-sm lg:text-md xl:text-lg">
        <p className="" >© 2025 Maa Vishvambhari TirthYatra Dham. All rights reserved.</p>
        <div className="flex gap-7 text-[#898989]">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
