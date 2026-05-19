"use client";

import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";

import hero from "../../../assets/Hero.png";
import playerAnimation from "../../../../public/Soccer player kick on the ball.json";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center bg-[#070d19]">

      
      <div className="absolute inset-0 z-0">
        <Image
          src={hero}
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center scale-105 opacity-75"
        />

       
        <div className="absolute inset-0 bg-[#070d19]/55"></div>

       
        <div className="absolute inset-0 bg-linear-to-r from-[#070d19]/80 via-transparent to-transparent"></div>
      </div>

    
      <div className="absolute top-1/4 left-1/3 w-125 h-125 bg-cyan-500/15 blur-[140px] rounded-full z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-blue-500/10 blur-[140px] rounded-full z-10"></div>

     
      <div className="relative z-20 container  mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center px-6 lg:px-12">

        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight text-white">
            Discover & Book <br />

            <span className="bg-linear-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Premium Sports
            </span>

            <br />
            Spaces
          </h1>

          <p className="text-gray-300 max-w-md">
            Explore premium sports facilities and experience next-gen booking environments.
          </p>

          <Link href="All-Facilities" className="px-8 py-3 hover:scale-95 hover:bg-cyan-700 h-12 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition">
            Explore Facilities
          </Link>
        </div>

        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-[80%] aspect-4/3 rounded-2xl overflow-hidden  shadow-2xl transition-transform duration-500 ease-out hover:scale-[1.02] will-change-transform"
               style={{ transform: 'rotate(-40deg)' }}>
            
         

           
            <div className="absolute inset-0  mix-blend-overlay"></div>
            <div className="absolute inset-0 backdrop-brightness-75 backdrop-contrast-125"></div>
            
            <div className="absolute inset-0 s pointer-events-none"></div>

            <div className="absolute bottom-[5%] right-[0%] md:right-[5%] w-80 z-10">
              <Lottie animationData={playerAnimation} loop />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;