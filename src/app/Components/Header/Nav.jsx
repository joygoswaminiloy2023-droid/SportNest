'use client'
import React from 'react';
import { Search, Menu, Calendar, PlusSquare, Settings, LogOut } from "lucide-react";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FiMoon, FiSun } from 'react-icons/fi';
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Image from 'next/image';
import logo from '@/assets/logo.png'


const Nav = () => {

  const pathname = usePathname();
    const router = useRouter();

 
  const { 
    data: session, 
    isPending 
  } = authClient.useSession()
    
  const User = session?.user


    
  const isLoggedIn=User;
  
  const handleLogout = async () => {
   await authClient.signOut();
   router.push('/Login')
  }


  return (
    
    <div className="border-b border-gray-800 bg-[#0b121f] text-white sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6 h-16">
        
      
        <div className="navbar-start gap-2">
          <div className="dropdown sm:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
              <Menu size={22} />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-3 shadow-2xl bg-[#0b121f] border border-gray-800 rounded-2xl w-64 gap-2">
              <li><Link href="/" className={pathname === "/" ? "text-cyan-400 font-medium" : "text-gray-300"}>Home</Link></li>
              <li><Link href="/All-Facilities" className={pathname === "/All-Facilities" ? "text-cyan-400 font-medium" : "text-gray-300"}>All Facilities</Link></li>
              {isLoggedIn && (
                <>
                  <div className="divider my-1 border-gray-800"></div>
                  <li><Link href="/My-bookings" className={pathname === "/My-bookings" ? "text-cyan-400 font-medium" : "text-gray-300"}><Calendar size={16}/> My Bookings</Link></li>
                   <li><Link href="/Add-Facilities" className={pathname === "/Add-Facilities" ? "py-2 gap-2 text-cyan-400" : "py-2 gap-2"}><PlusSquare size={16} className="text-gray-400" /> Add Facility</Link></li>
                  <li><Link href="/Manage-Facilities" className={pathname === "/Manage-Facilities" ? "text-cyan-400 font-medium" : "text-gray-300"}><Settings size={16}/> Manage My Facilities</Link></li>
                </>
              )}
            </ul>
          </div>

        <div className="flex items-center gap-2 cursor-pointer select-none">
  <Image src={logo} width={40} height={40} alt="logo" />
  <p className="font-bold tracking-wider text-lg hidden sm:block">
    SPORT<span className="text-cyan-400">NEST</span>
  </p>
</div>
        </div>


        <div className="navbar-center hidden sm:flex">
          <ul className="menu menu-horizontal px-1 gap-1 font-medium">
            <li>
              <Link href="/" className={pathname === "/" ? "text-cyan-400 active:bg-transparent focus:bg-transparent relative after:content-[''] after:absolute after:-bottom-4.5 after:left-3 after:right-3 after:h-0.5 after:bg-cyan-400" : "text-gray-300 hover:text-white transition-colors"}>
                Home
              </Link>
            </li>
            <li><Link href="/All-Facilities" className={pathname === "/All-Facilities" ? "text-cyan-400 relative after:content-[''] after:absolute after:-bottom-4.5 after:left-3 after:right-3 after:h-0.5 after:bg-cyan-400" : "text-gray-300 hover:text-white transition-colors"}>All Facilities</Link></li>
            {isLoggedIn && (
              <>
                <li><Link href="/My-bookings" className={pathname === "/My-bookings" ? "text-cyan-400 relative after:content-[''] after:absolute after:-bottom-4.5 after:left-3 after:right-3 after:h-0.5 after:bg-cyan-400" : "text-gray-300 hover:text-white transition-colors"}>My Bookings</Link></li>
                <li><Link href="/Add-Facilities" className={pathname === "/Add-Facilities" ? "text-cyan-400 relative after:content-[''] after:absolute after:-bottom-4.5 after:left-3 after:right-3 after:h-0.5 after:bg-cyan-400" : "text-gray-300 hover:text-white transition-colors"}>Add Facility</Link></li>
                <li><Link href="/Manage-Facilities" className={pathname === "/Manage-Facilities" ? "text-cyan-400 relative after:content-[''] after:absolute after:-bottom-4.5 after:left-3 after:right-3 after:h-0.5 after:bg-cyan-400" : "text-gray-300 hover:text-white transition-colors"}>Manage My Facilities</Link></li>
              </>
            )}
          </ul>
        </div>

        
        <div className="navbar-end gap-4">
     

          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-2 ring-cyan-400 focus:outline-none">
                <div className="w-9 rounded-full">
                  <Image width={400} height={400} alt="Profile" src={User?.image||"https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png"} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-2xl bg-[#111827] border border-gray-800 rounded-xl w-60 text-gray-200">
                <li className="px-3 py-2 border-b border-gray-800 pointer-events-none mb-1">
                  <p className="text-xs text-gray-500 font-medium p-0">Signed in as</p>
                  <p className="text-sm text-cyan-400 font-semibold p-0 truncate">{User.name}</p>
                </li>
                <li><Link href="/My-bookings" className={pathname === "/My-bookings" ? "py-2 gap-2 text-cyan-400" : "py-2 gap-2"}><Calendar size={16} className="text-gray-400" /> My Bookings</Link></li>
                <li><Link href="/Add-Facilities" className={pathname === "/Add-Facilities" ? "py-2 gap-2 text-cyan-400" : "py-2 gap-2"}><PlusSquare size={16} className="text-gray-400" /> Add Facility</Link></li>
                <li><Link href="/Manage-Facilities" className={pathname === "/Manage-Facilities" ? "py-2 gap-2 text-cyan-400" : "py-2 gap-2"}><Settings size={16} className="text-gray-400" /> Manage My Facilities</Link></li>
                <div className="divider my-1 border-gray-800"></div>
                <li>
                  <Button onClick={handleLogout} className="py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 gap-2">
                    <LogOut size={16} /> Log Out
                  </Button>
                </li>
              </ul>
            </div>
          ) : (
            <Link href='/Login'>
              <button className="btn btn-sm px-5 h-9 min-h-0 border-none rounded-full bg-linear-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold tracking-wide shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              Login
            </button>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};

export default Nav;