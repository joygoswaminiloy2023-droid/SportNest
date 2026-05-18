"use client";

import React, { useState } from 'react';

import { FiSearch, FiSliders, FiGrid, FiList } from "react-icons/fi";
import Cardfacility from '../Header/Card.jsx/Cardfacility';

const Allfacility = ({ data }) => {
    // useState handles the UI toggle without needing a reload
    const [view, setView] = useState('grid');

    return (
        <div className="min-h-screen bg-[#0f1115] p-6 lg:p-10">
            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* Search & Filter Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1 group">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-500 transition-colors z-10" />
                        <input 
                            type="text" 
                            placeholder="Search for facilities..." 
                            className="w-full bg-[#1a1d23] border border-gray-800 text-white pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500/50 transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <select className="bg-[#1a1d23] border hover:scale-95 duration-300 cursor-pointer border-gray-800 text-white px-4 py-3 rounded-xl focus:outline-none appearance-none min-w-[140px]">
                            <option>All Facilities</option>
                            <option>Badminton</option>
                            <option>Padel</option>
                            <option>Gym</option>
                        </select>

                        <button className="flex items-center gap-2 bg-cyan-500 hover:scale-95 duration-300 cursor-pointer hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/20">
                            <FiSliders />
                            <span>Filter</span>
                        </button>
                    </div>
                </div>

                {/* Title & View Switcher */}
                <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                    <h1 className="text-3xl font-bold text-white tracking-tight">All Facilities</h1>
                    
                    <div className="flex bg-[#1a1d23] p-1 rounded-lg border border-gray-800">
                        <button 
                            onClick={() => setView('grid')}
                            className={`p-2 rounded-md transition-all duration-300 ${
                                view === 'grid' ? "bg-gray-800 text-cyan-500 shadow-md" : "text-gray-500 hover:text-white"
                            }`}
                        >
                            <FiGrid size={20} />
                        </button>
                        <button 
                            onClick={() => setView('list')}
                            className={`p-2 rounded-md transition-all duration-300 ${
                                view === 'list' ? "bg-gray-800 text-cyan-500 shadow-md" : "text-gray-500 hover:text-white"
                            }`}
                        >
                            <FiList size={20} />
                        </button>
                    </div>
                </div>

                {/* Grid/List Display */}
                <div className={`grid transition-all duration-500 ease-in-out ${
                    view === 'grid' 
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                    : "grid-cols-1 gap-6"
                }`}>
                    {data?.map((item) => (
                        <Cardfacility key={item._id} data={item} view={view} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Allfacility;