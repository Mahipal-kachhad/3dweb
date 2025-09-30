"use client";
import Entry from "@/components/3d/Entry";
import AboutMVTY from "@/components/aboutMVTY/AboutMVTY";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* <Entry /> */}
      <div className="h-screen bg-black" />
      <div className="to-[#1D1D1F] bg-gradient-to-r from-[#0A0A0A] min-h-screen">
        <div className="bg-black rounded-b-4xl h-10" />
        <AboutMVTY />
      </div>
    </>
  );
}
