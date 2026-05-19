
import React from 'react';
import { FiBookmark, FiClock, FiMail } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';
import { SiInstagram, SiX, SiYoutube } from 'react-icons/si';
import logo from '@/assets/logo.png'
import Image from 'next/image';


const Foot = () => {
    return (
     <footer className="relative bg-base-900 border-t border-base-300 dark:border-neutral-800 text-base-content mt-20">
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-500 to-blue-500" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 p-10 pt-14">
        
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-2">
            <Image src={logo} width={40} height={40} alt="logo" />
            <span className="text-xl font-black tracking-wider bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              SPORTNEST
            </span>
          </div>
          
          <p className="text-sm text-neutral-content/80 max-w-sm leading-relaxed">
            Your premium marketplace for reserving top-tier athletic courts, sports facilities, and professional training Arenas. Find, book, and play seamlessly.
          </p>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-content/50 block">Follow the Action</span>
            <div className="flex items-center gap-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl bg-base-300 dark:bg-neutral-800 flex items-center justify-center text-base-content hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-sm transform hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                <SiX className="text-base" />
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl bg-base-300 dark:bg-neutral-800 flex items-center justify-center text-base-content hover:bg-linear-to-tr hover:from-yellow-500 hover:to-purple-600 hover:text-white transition-all duration-300 shadow-sm transform hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <SiInstagram className="text-base" />
              </a>

              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl bg-base-300 dark:bg-neutral-800 flex items-center justify-center text-base-content hover:bg-[#FF0000] hover:text-white transition-all duration-300 shadow-sm transform hover:-translate-y-0.5"
                aria-label="YouTube"
              >
                <SiYoutube className="text-base" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h6 className="footer-title text-sm font-bold tracking-widest text-base-content opacity-90 mb-4 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-cyan-500 after:mt-1">
            Explore Arenas
          </h6>
          <div className="flex flex-col gap-2.5 text-sm">
            <a className="link link-hover text-neutral-content/70 hover:text-cyan-400 transition-colors">Badminton Courts</a>
            <a className="link link-hover text-neutral-content/70 hover:text-cyan-400 transition-colors">Futsal Grounds</a>
            <a className="link link-hover text-neutral-content/70 hover:text-cyan-400 transition-colors">Tennis Courts</a>
            <a className="link link-hover text-neutral-content/70 hover:text-cyan-400 transition-colors">Basketball Rings</a>
          </div>
        </div>

        <div>
          <h6 className="footer-title text-sm font-bold tracking-widest text-base-content opacity-90 mb-4 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-cyan-500 after:mt-1">
            Partnership
          </h6>
          <div className="flex flex-col gap-2.5 text-sm">
            <a className="link link-hover text-neutral-content/70 hover:text-blue-400 transition-colors">List Your Facility</a>
            <a className="link link-hover text-neutral-content/70 hover:text-blue-400 transition-colors">Enterprise Program</a>
            <a className="link link-hover text-neutral-content/70 hover:text-blue-400 transition-colors">Affiliate Venues</a>
            <a className="link link-hover text-neutral-content/70 hover:text-blue-400 transition-colors">Careers</a>
          </div>
        </div>

        <div>
          <h6 className="footer-title text-sm font-bold tracking-widest text-base-content opacity-90 mb-4 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-500 after:mt-1">
            Support Desk
          </h6>
          <div className="flex flex-col gap-3 text-xs text-neutral-content/80">
            <p className="flex items-start gap-2">
              <span className="text-cyan-400 text-sm"> <FiMail></FiMail></span> 
              <span>support@sportnest.com</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-cyan-400 text-sm"><FiClock></FiClock></span>
              <span>Mon - Fri: 06:00 AM - 10:00 PM</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-blue-400 text-sm"><IoLocationSharp /></span>
              <span className="line-clamp-2">Stadium Road, Block C, Metro Sports Hub</span>
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-base-300 dark:border-neutral-800/60 bg-base-300/40 dark:bg-neutral-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-content/60">
          <div>
            © {new Date().getFullYear()} SportNest Arena Networks. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a className="hover:text-cyan-400 transition-colors cursor-pointer">Terms of Use</a>
            <a className="hover:text-cyan-400 transition-colors cursor-pointer">Privacy Policy</a>
            <a className="hover:text-cyan-400 transition-colors cursor-pointer">Cookie Parameters</a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Foot;