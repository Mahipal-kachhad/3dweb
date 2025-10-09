"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import fadeUp from "../function";
import { HiArrowLongRight } from "react-icons/hi2";
import BlurPopup from "../BlurPopup";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "swiper/css";
import moreDetails from "./moreDetails";

const DhamInfo = () => {
  const images = [
    { url: "/dham/maa10.png" },
    { url: "/dham/maa11.png" },
    { url: "/dham/maa15.jpg" },
    { url: "/dham/maa11.png" },
    { url: "/dham/maa10.png" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="bg-black pb-16 md:pb-20">
      <motion.h2
        className="text-3xl lg:text-[2.5rem] xl:text-[3.4rem] font-bold w-[85vw] max-w-6xl mx-auto uppercase text-center text-[#ff8127]"
        {...fadeUp()}
      >
        Maa Vishvambhari TirthYatra Dham
      </motion.h2>

      <div className="flex items-center w-[85vw] max-w-6xl mx-auto py-10">
        <motion.div className="flex-1 mt-10 w-[85vw] max-w-6xl mx-auto text-sm lg:text-lg" {...fadeUp()} >
          <p className="font-bold text-[#86868b] indent-50 pb-5 text-justify leading-7 lg:leading-8">
            On the western coast of India, in south of Gujarat state, to the
            east of Valsad district there are lust green hill ranges of Sahyadri
            and on West side howling Arabian Sea. There is green belt of flower
            saplings and innumerable trees of Mango, Teak, banyan, Kher etc.
            spreads over the fertile{" "}
            <span className="text-white font-extrabold">land of Valsad</span>.
            In south of Valsad,{" "}
            <span className="text-white font-extrabold">'Par' river</span> flows
            throughout the year, on its coast very beautiful villages are
            situated. This land is{" "}
            <span className="text-white font-extrabold">
              Karmabhoomi (workplace) of Parshuram
            </span>{" "}
            - one of the ten incarnations of Lord Vishnu. This area possesses
            incomparable charm of nature's beauty over the year. A wonder and{" "}
            <span className="text-white font-extrabold">
              divine Maa Vishvambhari TirthYatra Dham
            </span>{" "}
            is developed in{" "}
            <span className="text-white font-extrabold">Rabda town</span> which
            is located within heart soothing splendour of nature. This world
            class and stupendous dham is constructed in{" "}
            <span className="text-white font-extrabold">only 90 days</span> and
            it is going to become center of ideological and spiritual revolution
            for distributing them to entire world in near future.
          </p>
          <p className="font-bold text-[#86868b] indent-50 pb-5 text-justify leading-7 lg:leading-8">
            Mother ordered to{" "}
            <span className="text-white font-extrabold">
              Mahapatra (the founder of this Dham)
            </span>
            for construction of world class Vishvambhari Dham and gave the time
            limit of 90 days for its completion. Shri Mahapatra obeyed Mother's
            order and started construction with full devotion of his body, mind
            and wealth.
          </p>

          <p
            className="text-end text-[#FF8127] flex w-fit ms-auto gap-3 items-center pe-4 pt-5 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            More details{" "}
            <span className="inline text-2xl">
              <HiArrowLongRight />
            </span>
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center w-[480px]"
          {...fadeUp(0.2)}
        >
          <div className="max-w-[480px] h-[520px]">
            <Swiper
              ref={swiperRef}
              direction="vertical"
              spaceBetween={20}
              slidesPerView={2}
              className="rounded-2xl h-full"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx} className="!h-[250px]">
                  <img
                    src={img.url}
                    alt={`Gallery image ${idx + 1}`}
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex items-center justify-center gap-5 mt-5">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="bg-neutral-900 hover:bg-neutral-800 p-2 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <FiChevronUp className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="bg-neutral-900 hover:bg-neutral-800 p-2 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <FiChevronDown className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>

      <BlurPopup isOpen={isOpen} setIsOpen={setIsOpen}>
        <h2 className="text-3xl lg:text-[2.5rem] xl:text-[3.4rem] font-bold text-[#ff8127] text-center mb-5 uppercase">
          Maa Vishvambhari TirthYatra Dham
        </h2>
        {moreDetails.map((val, idx) => (
          <p
            key={idx}
            className="pb-3 text-justify leading-7 lg:leading-8 indent-25"
          >
            {val}
          </p>
        ))}
      </BlurPopup>
    </div>
  );
};

export default DhamInfo;
