/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from "react";
import { FiSearch, FiSliders, FiGrid, FiList } from "react-icons/fi";
import Cardfacility from "../Header/Card.jsx/Cardfacility";

const Allfacility = () => {


  const [search, setSearch] = useState("");


  const [sport, setSport] = useState("All Facilities");


  const [facilities, setFacilities] = useState([]);

  
  const [view, setView] = useState("grid");


  const fetchFacilities = async () => {

    let url = `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/facility?`;

   
    if (search) {
      url += `search=${search}&`;
    }

    // Sport query
    if (sport !== "All Facilities") {
      url += `sport=${sport}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    setFacilities(data);
  };

  useEffect(() => {
    fetchFacilities();

  }, [search, sport]);

  return (
    <div className="min-h-screen bg-[#0f1115] p-6 lg:p-10">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Search & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

          {/* Search */}
          <div className="relative flex-1 group">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-500 transition-colors z-10" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search facility..."
              className="w-full bg-[#1a1d23] border border-gray-800 text-white pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500/50 transition-all"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center gap-3">

            <select
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              className="bg-[#1a1d23] border hover:scale-95 duration-300 cursor-pointer border-gray-800 text-white px-4 py-3 rounded-xl focus:outline-none appearance-none min-w-[140px]"
            >
              <option>All Facilities</option>
               <option>Football Field</option>
               <option>Table Tennis</option>
               <option>Swimming Pool</option>
               <option>Boxing Ring</option>
               <option>Yoga Studio</option>
               <option>Volleyball Court</option>
              <option>Cricket Pitch</option>
              <option>Tennis Court</option>
              <option>Basketball Court</option>
              <option>Multi-Purpose Arena</option>
              <option>Gymnasium</option>
              <option>Badminton Court</option>
            </select>

         
          </div>
        </div>

       
        <div className="flex items-center justify-between border-b border-gray-800 pb-4">

          <h1 className="text-3xl font-bold text-white tracking-tight">
            All Facilities
          </h1>

          <div className="flex bg-[#1a1d23] p-1 rounded-lg border border-gray-800">

            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-md transition-all duration-300 ${
                view === "grid"
                  ? "bg-gray-800 text-cyan-500 shadow-md"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              <FiGrid size={20} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-md transition-all duration-300 ${
                view === "list"
                  ? "bg-gray-800 text-cyan-500 shadow-md"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              <FiList size={20} />
            </button>

          </div>
        </div>

        {/* Facility Cards */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            view === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "grid-cols-1 gap-6"
          }`}
        >
          {facilities?.map((item) => (
            <Cardfacility
              key={item._id}
              data={item}
              view={view}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Allfacility;