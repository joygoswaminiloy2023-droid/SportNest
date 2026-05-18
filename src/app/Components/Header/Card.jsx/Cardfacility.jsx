import React from "react";

const Cardfacility = ({ data }) => {
  // Destructure your dynamic facility data fields
  const {
    facilityName,
    facilityType,
    imageUrl,
    location,
    pricePerHour,
    capacity,
    description,
  } = data;

  return (
    <div className="group relative w-full max-w-sm mx-auto">
      {/* Premium Backdrop Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition duration-500" />

      {/* Main DaisyUI Card */}
      <div className="card bg-base-100/90 dark:bg-neutral/90 backdrop-blur-md relative w-full overflow-hidden rounded-2xl border border-base-300 dark:border-neutral-focus shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:border-base-400">
        
        {/* Color top accent strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500" />

        {/* Figure / Image Section */}
        <figure className="relative h-48 w-full overflow-hidden p-0 pt-0">
          <img
            src={imageUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
            alt={facilityName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Top category badge over image */}
          <div className="absolute top-3 left-3 z-10">
            <span className="badge badge-sm bg-black/60 text-white border-none font-medium px-2.5 py-3 backdrop-blur-sm">
              {facilityType}
            </span>
          </div>
        </figure>

        {/* Card Content Body */}
        <div className="card-body p-5 pt-4 pb-3 items-stretch text-left">
          {/* Animated Header */}
          <h2 className="card-title text-lg font-bold text-base-content mb-0 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent">
            {facilityName}
          </h2>
          
          {/* Location details */}
          <p className="text-neutral-content/70 text-[11px] font-medium flex-grow-0 flex items-center gap-1 mb-1">
            📍 {location}
          </p>

          {/* Core Description */}
          <p className="text-neutral-content/80 text-xs line-clamp-2 leading-relaxed flex-grow-0 mb-3">
            {description}
          </p>

          {/* Pricing & Capacity Split Row */}
          <div className="flex justify-between items-center mb-3">
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

          {/* Actions: Button & System Badge */}
          <div className="card-actions flex-col gap-3 mt-1">
            <button className="btn min-h-0 h-11 w-full rounded-xl font-semibold text-sm border-none bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20 transform transition-all active:scale-95 hover:brightness-110">
              Book Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cardfacility;