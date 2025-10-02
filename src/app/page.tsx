"use client";
import Entry from "@/components/3d/Entry";
import AboutMVTY from "@/components/aboutMVTY/AboutMVTY";
import VideoModel from "@/components/dham/VideoModel";
import GlimpsOfMaa from "@/components/maaVishvambhari/GlimpsOfMaa";
import MaaVishvambhari from "@/components/maaVishvambhari/MaaVishvambhari";
import SreeVitthalbhai from "@/components/sreeVitthalbhai/SreeVitthalbhai";
import VitthalbhaiBio from "@/components/sreeVitthalbhai/VitthalbhaiBio";

export default function Home() {
  return (
    <>
      <Entry />
      {/* <div className="h-screen bg-black" /> */}
      <div className="to-[#1D1D1F] bg-gradient-to-r from-[#0A0A0A] min-h-screen">
        <div className="bg-black rounded-b-4xl h-10" />
        <AboutMVTY />
        <MaaVishvambhari />
        <GlimpsOfMaa />
        <SreeVitthalbhai />
        <VitthalbhaiBio />
        {/* <VideoModel /> */}
      {/* <div className="h-screen bg-amber-900 -z-3" /> */}

      </div>
    </>
  );
}
