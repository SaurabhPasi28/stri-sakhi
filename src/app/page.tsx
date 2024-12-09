'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Image from "next/image";
// import Footer from '@/components/Footer.jsx' 
// import Chatbot from '@/components/Chatbot.jsx'
// import HeroSection from '@/components/HeroSection.jsx'
// import Navbar from '@/components/Navbar.jsx'
import HomeSlider from '@/components/Slider.jsx'
import CardBox from '@/components/CardsBox.jsx'
import useGeoLocation from '@/hooks/useGeolocation';
import useLocationStore from '@/store/locationStore';
import GoogleTranslator from '@/components/GoogleTranslator'
export default function Home() {

  return (
    <div className="dark:text-white">
      {/* <Navbar/>
      <HeroSection/>
      <Chatbot/>
      <Footer/> */}
      <HomeSlider/>
      <CardBox/>
      {/* <GoogleTranslator /> */}
    </div>
  );
}
