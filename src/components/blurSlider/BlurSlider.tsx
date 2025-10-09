"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  { url: "/dham/patr15.png" },
  { url: "/dham/maa10.png" },
  { url: "/dham/maa11.png" },
  { url: "/dham/maa15.jpg" },
  { url: "/dham/patr8.jpg" },
  { url: "/dham/patr9.jpg" },
  { url: "/dham/patr10.jpg" },
  { url: "/dham/patr1.png" },
];

const BlurSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div className="w-full bg-black py-16 relative">
      <Swiper
        ref={swiperRef}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={-20}
        className="h-[65vh] max-w-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-[50vw] !h-full overflow-hidden transition-all duration-300"
          >
            {({ isActive }) => (
              <div
                className={`w-full h-full relative transition-all duration-300 ${
                  !isActive ? "scale-[0.8]" : ""
                }`}
              >
                <img
                  src={img.url}
                  alt={`Gallery image ${idx + 1}`}
                  className={`w-full h-full object-cover rounded-3xl ${
                    !isActive ? "" : ""
                  } `}
                />
                {!isActive && (
                  <div className="absolute inset-0 backdrop-blur-sm rounded-3xl bg-black/30"></div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center gap-4 pt-10">
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="w-9 h-9 rounded-full border-2 border-neutral-400 bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="w-9 h-9 rounded-full border-2 border-neutral-400 bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>
    </div>
  );
};

export default BlurSlider;
