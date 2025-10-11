import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";

const Map = () => {
  return (
    <div className="w-full  bg-black flex items-center justify-center py-10">
      <div className="w-[85vw] max-w-7xl mx-auto flex justify-between gap-7 rounded-xl lg:rounded-3xl">
        <div className=" text-white w-sm lg:w-lg rounded-xl lg:rounded-3xl bg-[#1c1c1c]">
          <h2 className="text-xl lg:text-3xl font-bold text-white p-4 lg:p-7 text-center">
           MVTY Dham Details
          </h2>

          <div className="text-neutral-100 rounded-2xl bg-[#282828] px-2 lg:px-7 py-2 lg:py-5">
            <div className="flex gap-2 py-1 lg:py-3">
              <div className="p-2">
                <BsTelephoneFill className="text-md"/>
              </div>
              <div>
                <h4 className="font-bold text-[0.75rem] lg:text-lg">Phone</h4>
                <p className="text-[0.7rem] lg:text-sm text-[#686868]">Mon-Fri From 8:00 AM to  5:00 PM</p>
                <p className="font-bold text-[0.75rem] lg:text-lg">+91 72030 25755</p>
              </div>
            </div>
            <div className="flex gap-2 py-1 lg:py-3">
              <div className="p-1">
                <HiMail className="text-xl lg:text-2xl"/>
              </div>
              <div>
                <h4 className="font-bold text-[0.75rem] lg:text-lg">Chat to US</h4>
                <p className="text-[0.7rem] lg:text-sm text-[#686868]">Our Friendly Team is here to help.</p>
                <p className="font-bold text-[0.75rem] lg:text-lg">maavishvambhari@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-2 py-1 lg:py-3">
              <div className="p-1">
                <MdLocationPin className="text-xl lg:text-2xl"/>
              </div>
              <div className="w-fit">
                <h4 className="font-bold text-[0.75rem] lg:text-lg">Office</h4>
                <p className="text-[0.7rem] lg:text-sm text-[#686868] w-fit">Time : Mon to Sat</p>
                <p className="font-bold text-[0.75rem] lg:text-lg w-fit">Maa Vishvambhari TirthYatra Dham, Rabada - 396055, Ta. & Dist. Valsad (Guj-IND)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white w-full">
          <iframe
            className="w-full h-full rounded-xl lg:rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.954545429003!2d73.00636279815053!3d20.528825607828026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c14daf058fdb%3A0xd9d1686647a88e64!2sMaa%20Vishvambhari%20TirthYatra%20Dham!5e1!3m2!1sen!2sin!4v1759840700122!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
