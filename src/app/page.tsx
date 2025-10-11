"use client";
import Entry from "@/components/3d/Entry";
import AboutMVTY from "@/components/AboutMVTY";
import BlurSlider from "@/components/BlurSlider";
import Contact from "@/components/Contact";
import Darshan from "@/components/Darshan";
import DhamInfo from "@/components/dham/DhamInfo";
import VideoModel from "@/components/dham/VideoModel";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import GlimpsOfMaa from "@/components/maaVishvambhari/GlimpsOfMaa";
import MaaVishvambhari from "@/components/maaVishvambhari/MaaVishvambhari";
import Map from "@/components/Map";
import Pillars from "@/components/pillars/Pillars";
import Quotes from "@/components/quotes/Quotes";
import SreeVitthalbhai from "@/components/sreeVitthalbhai/SreeVitthalbhai";
import VitthalbhaiBio from "@/components/sreeVitthalbhai/VitthalbhaiBio";

export default function Home() {
  return (
    <>
      <Entry />
      <div className="to-[#1D1D1F] bg-gradient-to-r from-[#0A0A0A] min-h-screen">
        <div className="bg-black rounded-b-4xl h-10" />
        <AboutMVTY />
        <MaaVishvambhari />
        <GlimpsOfMaa />
        <SreeVitthalbhai />
        <VitthalbhaiBio />
        <VideoModel />
        <DhamInfo />
        <Pillars />
        <BlurSlider />
        <Events />
        <Quotes />
        <Darshan />
        <Map />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
