import Image from "next/image";
import React from "react";
import { IoLocate } from "react-icons/io5";

const Cardfacility = ({ data, view }) => {
  const {
    facilityName,
    facilityType,
    imageUrl,
    location,
    pricePerHour,
    capacity,
    description,
  } = data;

  const isList = view === 'list';

  return (
    <div className={`group relative w-full mx-auto transition-all duration-500`}>
      {/* Backdrop Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition duration-500" />

      {/* Main Card Container */}
      <div className={`card bg-base-100/90 dark:bg-neutral/90 backdrop-blur-md relative overflow-hidden rounded-2xl border border-base-300 dark:border-neutral-focus shadow-xl transition-all duration-300 group-hover:border-base-400 
        ${isList ? "flex-row h-64" : "flex-col"}`}>
        
        {/* Top/Left accent strip */}
        <div className={`${isList ? "w-1.5 h-full" : "h-1.5 w-full"} bg-gradient-to-r from-cyan-500 to-blue-500`} />

        {/* Figure / Image Section */}
        <figure className={`relative overflow-hidden p-0 m-0 
          ${isList ? "w-1/3 h-full" : "h-48 w-full"}`}>
          <Image
          width={400}
          height={400}
            src={imageUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
            alt={facilityName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 z-10">
            <span className="badge badge-sm bg-black/60 text-white border-none font-medium px-2.5 py-3 backdrop-blur-sm">
              {facilityType}
            </span>
          </div>
        </figure>

        {/* Card Content Body */}
        <div className={`card-body p-5 flex-1 justify-between ${isList ? "text-left" : "items-stretch text-left"}`}>
          <div>
            <h2 className="card-title text-lg font-bold text-base-content mb-0 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent">
              {facilityName}
            </h2>
            
            <p className="text-neutral-content/70 text-[11px] font-medium flex items-center gap-1 mb-1">
            <IoLocate></IoLocate> {location}
            </p>

            <p className={`text-neutral-content/80 text-xs leading-relaxed mb-3 ${isList ? "line-clamp-3" : "line-clamp-2"}`}>
              {description}
            </p>
          </div>

          <div className="space-y-4">
            {/* Pricing & Capacity */}
            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  ${pricePerHour}
                </span>
                <span className="text-neutral-content/60 text-xs"> / hour</span>
              </div>
              <div className="text-xs text-neutral-content/70 font-medium">
                Capacity: <span className="text-base-content font-bold">{capacity} players</span>
              </div>
            </div>

            {/* Actions */}
            <div className={`flex items-center gap-3 ${isList ? "justify-start" : "flex-col"}`}>
              <button className={`btn min-h-0 h-11 rounded-xl font-semibold text-sm border-none bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20 transform transition-all active:scale-95 hover:brightness-110 
                ${isList ? "w-48" : "w-full"}`}>
                Book Now
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardfacility;