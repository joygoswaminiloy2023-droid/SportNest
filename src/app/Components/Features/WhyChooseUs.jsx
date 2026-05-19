"use client";

import React from "react";
import {
  FiShield,
  FiZap,
  FiUsers,
  FiStar,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

const features = [
  {
    icon: <FiShield />,
    title: "Safe & Secure",
    desc: "All facilities are verified and maintained with top safety standards.",
  },
  {
    icon: <FiZap />,
    title: "Fast Booking",
    desc: "Book your favorite facility in seconds with our smart system.",
  },
  {
    icon: <FiUsers />,
    title: "Community Driven",
    desc: "Join a large community of sports lovers and fitness enthusiasts.",
  },
  {
    icon: <FiStar />,
    title: "Top Rated",
    desc: "Highly rated facilities based on real user reviews and feedback.",
  },
  {
    icon: <FiMapPin />,
    title: "Easy Location",
    desc: "Find nearby sports facilities easily with smart location filters.",
  },
  {
    icon: <FiClock />,
    title: "24/7 Access",
    desc: "Many facilities are open round the clock for your convenience.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white px-6 py-16">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Why Choose <span className="text-cyan-400">Us</span>
        </h1>
        <p className="text-gray-400 mt-4">
          We provide the best sports facility experience with modern technology,
          trusted services, and a user-friendly platform.
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        
        {features.map((item, index) => (
          <div
            key={index}
            className="group bg-[#1a1d23] border border-gray-800 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-500/10"
          >
         
            <div className="text-3xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>

           
            <h2 className="text-xl font-semibold mb-2">
              {item.title}
            </h2>

           
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;