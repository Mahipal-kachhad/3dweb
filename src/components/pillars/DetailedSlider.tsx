"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Slider = ({ images }: { images: { url: string }[] }) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #fff;
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          /* This overrides the default stretching effect */
          width: 8px !important;
        }
      `}</style>

      <div className="w-[400px] lg:w-[500px] mx-auto py-5 relative group">
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="rounded-2xl"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-[225px] lg:h-[300px]  bg-black">
                <img
                  src={img.url}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="absolute top-4 left-4 z-10 bg-black/50 text-white text-sm font-medium px-3 py-1 rounded-lg">
            {activeIndex + 1} / {images.length}
          </div>
          <div className="swiper-pagination !absolute !top-4 !right-4 !w-auto !left-auto"></div>
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 w-11 h-11 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10 w-11 h-11 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
