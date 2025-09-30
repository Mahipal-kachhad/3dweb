"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { FaPause, FaPlay } from "react-icons/fa";

const images = [
  { url: "/dham/maa10.png" },
  { url: "/dham/maa11.png" },
  { url: "/dham/maa15.jpg" },
  { url: "/dham/patr1.png" },
  { url: "/dham/patr15.png" },
];

const AboutMVTY = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAutoplayProgress = (s: any, time: number, progress: number) => {
    const currentProgress = (1 - progress) * 100;
    paginationRef.current?.style.setProperty(
      "--progress-width",
      `${currentProgress}%`
    );
  };

  return (
    <div className="mt-15">
      <h1
        data-aos="fade-up"
        className="w-3/4 mx-auto text-5xl font-bold text-white"
      >
        About MVTY Dham
      </h1>

      <div>
        <Swiper
          ref={swiperRef}
          className="mt-15 min-h-70 !w-full"
          modules={[Pagination, Autoplay]}
          speed={900}
          spaceBetween={15}
          slidesPerView={"auto"}
          centeredSlides
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".about-mvty-pagination" }}
          onAutoplayTimeLeft={handleAutoplayProgress}
        >
          {images.map((val, idx) => (
            <SwiperSlide
              key={idx}
              className="!h-[455px] flex items-center justify-center !w-[700px] rounded-2xl overflow-hidden object-cover object-center"
            >
              <img src={val.url} alt="sliderImage" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="sticky bottom-0 z-10 mt-10 py-10">
        <div className="flex items-center justify-center mt-5 gap-4">
          <button
            onClick={handlePlayPause}
            className="p-4 rounded-full bg-black/10 backdrop-blur-md text-[#b3b3b3] font-medium hover:bg-black/20 transition sticky bottom-10 shadow-[inset_0.3px_0.3px_0.6px_rgba(255,255,255,0.8),inset_-0.3px_-0.3px_0.6px_rgba(0,0,0,0.9)]"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <div
            className="p-5 rounded-full gap-5 about-mvty-pagination flex items-center bg-black/10 backdrop-blur-md text-[#b3b3b3] font-medium hover:bg-black/20 transition !w-fit shadow-[inset_0.3px_0.3px_0.6px_rgba(255,255,255,0.8),inset_-0.3px_-0.3px_0.6px_rgba(0,0,0,0.9)]"
            ref={paginationRef}
          />
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #fff;
          opacity: 0.5;
          border-radius: 50%;
          transition: width 0.3s ease-in-out, border-radius 0.3s ease-in-out;
        }
        .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.3);
          opacity: 1; /* Reset opacity to 1 since we handle it in the background-color */
          position: relative;
          overflow: hidden;
        }
        .swiper-pagination-bullet-active::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: var(--progress-width, 0%);
          height: 100%;
          background-color: #fff;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default AboutMVTY;
