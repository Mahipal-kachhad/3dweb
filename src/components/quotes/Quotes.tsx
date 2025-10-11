"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import items from "./quotesArray";
import fadeUp from "../function";
import { motion } from "framer-motion";

const Quotes = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="w-full py-10 relative bg-black">
      <motion.h2
        className="text-3xl lg:text-[2.5rem] xl:text-[3.4rem] font-bold w-[85vw] max-w-6xl mx-auto uppercase text-center text-[#ff8127] mt-10 lg:mt-15"
        {...fadeUp()}
      >
        Quotes by Mahapatra
      </motion.h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={700}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        ref={swiperRef}
        className="!py-30"
      >
        {items.map((card, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-[300px] lg:!w-[400px] rounded-lg"
          >
            {({ isActive }) => (
              <div className="relative w-full h-full">
                <div
                  className={`w-full h-full bg-white rounded-lg shadow-lg p-4 transition-all duration-300 ${
                    isActive ? "" : "scale-[0.85] blur-[15px]"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={card.imageSrc}
                      alt={`Card image ${idx + 1}`}
                      className="w-full h-auto object-cover rounded-md"
                    />
                    <img
                      src="/favicon.png"
                      alt="Logo"
                      className="absolute top-2 right-2 w-10 h-10"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <p className="text-gray-700">
                      <span className="font-semibold">{card.title}</span>{" "}
                      {card.text}
                    </p>
                    <p className="text-right text-sm text-gray-500 mt-2">
                      {card.author}
                    </p>
                  </div>
                </div>
                {!isActive && (
                  <div className="absolute inset-0 bg-black/20 rounded-lg pointer-events-none"></div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-10 pointer-events-none">
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white transition-colors"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white transition-colors"
        >
          <FiChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default Quotes;