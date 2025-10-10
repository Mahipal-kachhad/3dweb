"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { FaPause, FaPlay } from "react-icons/fa";
import fadeUp from "../function";

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

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  }, []);

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
    <div className="mt-15 pb-5">
      <motion.h1
        className="text-3xl lg:text-[2.5rem] xl:text-[3.4rem] font-bold w-[85vw] max-w-6xl mx-auto uppercase text-center text-[#ff8127]"
        {...fadeUp()}
      >
        About MVTY Dham
      </motion.h1>

      <div>
        <Swiper
          ref={swiperRef}
          className="mt-15 min-h-70"
          modules={[Pagination, Autoplay]}
          speed={1100}
          spaceBetween={20}
          slidesPerView={"auto"}
          centeredSlides
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, el: ".about-mvty-pagination" }}
          onAutoplayTimeLeft={handleAutoplayProgress}
        >
          {images.map((val, idx) => (
            <SwiperSlide
              key={idx}
              className="!w-[65vw] !h-[39vw] flex items-center justify-center rounded-[2rem] lg:rounded-[3.3rem] overflow-hidden object-cover object-center"
            >
              <img src={val.url} alt="sliderImage" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="sticky bottom-0 z-10 py-10">
        <div className="flex items-center justify-center mt-5 gap-4">
          <button
            onClick={handlePlayPause}
            className="p-4 lg:p-5 rounded-full backdrop-blur-md bg-[rgba(42,42,45,0.6)] text-[#ffffff] font-medium transition"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <div
            className="p-5 lg:p-6 rounded-full gap-[11px] about-mvty-pagination flex items-center bg-[rgba(42,42,45,0.72)] backdrop-blur-md text-[#b3b3b3] font-medium  transition !w-fit"
            ref={paginationRef}
          />
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #fff;
          opacity: 0.8;
          border-radius: 50%;
          transition: width 0.3s ease-in-out, border-radius 0.3s ease-in-out;
        }
        .swiper-pagination-bullet-active {
          width: 65px;
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
