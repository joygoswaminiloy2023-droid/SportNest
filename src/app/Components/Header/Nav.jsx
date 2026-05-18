'use client'
import React from 'react';
import { Search, Menu, Calendar, PlusSquare, Settings, LogOut } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMoon, FiSun } from 'react-icons/fi';

const Nav = () => {
  const isLoggedIn = true; 
  const pathname = usePathname();

  return (
    
    <div className="border-b border-gray-800 bg-[#0b121f] text-white sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6 h-16">
        
      
        <div className="navbar-start gap-2">
          <div className="dropdown sm:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
              <Menu size={22} />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl bg-[#0b121f] border border-gray-800 rounded-2xl w-64 gap-2">
              <li><Link href="/" className={pathname === "/" ? "text-cyan-400 font-medium" : "text-gray-300"}>Home</Link></li>
              <li><Link href="/All-Facilities" className={pathname === "/All-Facilities" ? "text-cyan-400 font-medium" : "text-gray-300"}>All Facilities</Link></li>
              {isLoggedIn && (
                <>
                  <div className="divider my-1 border-gray-800"></div>
                  <li><Link href="/My-Bookings" className={pathname === "/My-Bookings" ? "text-cyan-400 font-medium" : "text-gray-300"}><Calendar size={16}/> My Bookings</Link></li>
                  <Link href="/Add-Facilities" className={pathname === "/Add-Facilities" ? "text-cyan-400 font-medium" : "text-gray-300"}> <li><PlusSquare size={16}/> Add Facility</li></Link>
                  <li><Link href="/Manage-Facilities" className={pathname === "/Manage-Facilities" ? "text-cyan-400 font-medium" : "text-gray-300"}><Settings size={16}/> Manage My Facilities</Link></li>
                </>
              )}
            </ul>
          </div>

          <div className="flex items-center gap-2 cursor-pointer select-none">
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <span className="font-black text-xs text-white">SN</span>
            </div>
            <p className="font-bold tracking-wider text-lg hidden sm:block">
              SPORT<span className="text-cyan-400">NEST</span>
            </p>
          </div>
        </div>


        <div className="navbar-center hidden sm:flex">
          <ul className="menu menu-horizontal px-1 gap-1 font-medium">
            <li>
              <Link href="/" className={pathname === "/" ? "text-cyan-400 active:bg-transparent focus:bg-transparent relative after:content-[''] after:absolute after:bottom-[-18px] after:left-3 after:right-3 after:h-[2px] after:bg-cyan-400" : "text-gray-300 hover:text-white transition-colors"}>
                Home
              </Link>
            </li>
            <li><Link href="/All-Facilities" className={pathname === "/All-Facilities" ? "text-cyan-400 relative after:content-[''] after:absolute after:bottom-[-18px] after:left-3 after:right-3 after:h-[2px] after:bg-cyan-400" : "text-gray-300 hover:text-white transition-colors"}>All Facilities</Link></li>
            {isLoggedIn && (
              <>
                <li><Link href="/My-Bookings" className={pathname === "/My-Bookings" ? "text-cyan-400 relative after:content-[''] after:absolute after:bottom-[-18px] after:left-3 after:right-3 after:h-[2px] after:bg-cyan-400" : "text-gray-300 hover:text-white transition-colors"}>My Bookings</Link></li>
                <li><Link href="/Add-Facilities" className={pathname === "/Add-Facilities" ? "text-cyan-400 relative after:content-[''] after:absolute after:bottom-[-18px] after:left-3 after:right-3 after:h-[2px] after:bg-cyan-400" : "text-gray-300 hover:text-white transition-colors"}>Add Facility</Link></li>
                <li><Link href="/Manage-Facilities" className={pathname === "/Manage-Facilities" ? "text-cyan-400 relative after:content-[''] after:absolute after:bottom-[-18px] after:left-3 after:right-3 after:h-[2px] after:bg-cyan-400" : "text-gray-300 hover:text-white transition-colors"}>Manage My Facilities</Link></li>
              </>
            )}
          </ul>
        </div>

        
        <div className="navbar-end gap-4">
        <label className="swap swap-rotate btn btn-ghost btn-circle bg-slate-900/80 border border-gray-700 hover:border-cyan-500 transition-colors">
     
      <input type="checkbox" className="theme-controller" value="light" />

     
      <FiSun className="swap-on fill-current w-5 h-5 text-yellow-400" />

    
      <FiMoon className="swap-off fill-current w-5 h-5 text-cyan-400" />
    </label>

          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-2 ring-cyan-400 focus:outline-none">
                <div className="w-9 rounded-full">
                  <img alt="Profile" src="https://i.pravatar.cc/150?u=sportnest" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-[#111827] border border-gray-800 rounded-xl w-60 text-gray-200">
                <li className="px-3 py-2 border-b border-gray-800 pointer-events-none mb-1">
                  <p className="text-xs text-gray-500 font-medium p-0">Signed in as</p>
                  <p className="text-sm text-cyan-400 font-semibold p-0 truncate">player@sportnest.com</p>
                </li>
                <li><Link href="/My-Bookings" className={pathname === "/My-Bookings" ? "py-2 gap-2 text-cyan-400" : "py-2 gap-2"}><Calendar size={16} className="text-gray-400" /> My Bookings</Link></li>
                <li><Link href="/Add-Facilities" className={pathname === "/Add-Facilities" ? "py-2 gap-2 text-cyan-400" : "py-2 gap-2"}><PlusSquare size={16} className="text-gray-400" /> Add Facility</Link></li>
                <li><Link href="/Manage-Facilities" className={pathname === "/Manage-Facilities" ? "py-2 gap-2 text-cyan-400" : "py-2 gap-2"}><Settings size={16} className="text-gray-400" /> Manage My Facilities</Link></li>
                <div className="divider my-1 border-gray-800"></div>
                <li>
                  <a className="py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 gap-2">
                    <LogOut size={16} /> Log Out
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-sm px-5 h-9 min-h-0 border-none rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold tracking-wide shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              Login
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default Nav;