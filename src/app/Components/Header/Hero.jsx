"use client";

import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import {motion} from 'framer-motion'
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

      <motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="relative z-20 container mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center px-6 lg:px-12"
>
  <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
    
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.7,
      }}
      className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight text-white"
    >
      Discover & Book <br />

      <span className="bg-linear-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
        Premium Sports
      </span>

      <br />
      Spaces
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.7,
      }}
      className="text-gray-300 max-w-md"
    >
      Explore premium sports facilities and experience next-gen booking
      environments.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.6,
        duration: 0.5,
      }}
    >
      <Link
        href="/All-Facilities"
        className="inline-flex items-center justify-center px-8 py-3 h-12 rounded-full bg-cyan-400 text-black font-bold hover:bg-cyan-300 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30"
      >
        Explore Facilities
      </Link>
    </motion.div>
  </div>
</motion.div>

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