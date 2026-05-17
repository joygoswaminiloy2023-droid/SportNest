import React from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@hero-ui/react";
import { Search, LogOut, Calendar, PlusSquare, Settings, LayoutDashboard } from "lucide-react";

const Nav = () => {
    return (
      <Navbar
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#0b121f] text-white border-b border-gray-800"
      maxWidth="xl"
    >
      {/* --- LEFT: Logo & Brand --- */}
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand className="gap-2 cursor-pointer">
          {/* Hexagon Nest/Court Style Logo */}
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <span className="font-black text-xs text-white">SN</span>
          </div>
          <p className="font-bold text-inherit tracking-wider text-xl hidden sm:block bg-gradient-to-r from-white via-gray-200 to-cyan-400 bg-clip-text text-transparent">
            SPORT<span className="text-cyan-400">NEST</span>
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* --- CENTER: Public Navigation Links --- */}
      <NavbarContent className="hidden md:flex gap-6" justify="center">
        <NavbarItem isActive>
          <Link 
            href="#" 
            className="text-cyan-400 font-medium relative after:content-[''] after:absolute after:bottom-[-22px] after:left-0 after:w-full after:h-[2px] after:bg-cyan-400"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            All Facilities
          </Link>
        </NavbarItem>

        {/* Private Links shown inline only if logged in */}
        {isLoggedIn && (
          <>
            <NavbarItem>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                My Bookings
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Add Facility
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Manage Facilities
              </Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      {/* --- RIGHT: Search & Auth Actions --- */}
      <NavbarContent justify="end" className="gap-4">
        {/* Search Input mimicking the image */}
        <NavbarItem className="hidden lg:flex">
          <Input
            classNames={{
              base: "max-w-full w-[240px] h-10",
              mainWrapper: "h-full",
              input: "text-small text-white placeholder:text-gray-400",
              inputWrapper: "h-full font-normal text-default-500 bg-slate-900/80 border border-gray-700 hover:border-gray-600 focus-within:!border-cyan-500 rounded-full px-4",
            }}
            placeholder="Search for courts..."
            size="sm"
            startContent={<Search size={18} className="text-gray-400" />}
            type="search"
          />
        </NavbarItem>

        {isLoggedIn ? (
          // USER LOGGED IN: Profile Dropdown
          <Dropdown placement="bottom-end" className="bg-[#111827] border border-gray-800 text-white">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform ring-2 ring-cyan-400"
                color="primary"
                name="User Profile"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2 border-b border-gray-800">
                <p className="font-semibold text-gray-400">Signed in as</p>
                <p className="font-semibold text-cyan-400">player@sportnest.com</p>
              </DropdownItem>
              <DropdownItem key="bookings" startContent={<Calendar size={16} />}>
                My Bookings
              </DropdownItem>
              <DropdownItem key="add_facility" startContent={<PlusSquare size={16} />}>
                Add Facility
              </DropdownItem>
              <DropdownItem key="manage_facilities" startContent={<Settings size={16} />}>
                Manage My Facilities
              </DropdownItem>
              <DropdownItem 
                key="logout" 
                color="danger" 
                className="text-danger" 
                startContent={<LogOut size={16} />}
                onPress={handleLogout}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          // USER NOT LOGGED IN: Cyan Glow Action Button
          <NavbarItem>
            <Button 
              as={Link} 
              color="primary" 
              href="#" 
              variant="solid"
              className="bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold tracking-wide rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all duration-300"
              onPress={() => setIsLoggedIn(true)} // Mock Login for testing
            >
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      {/* --- MOBILE NAVIGATION MENU --- */}
      <NavbarMenu className="bg-[#0b121f]/95 backdrop-blur-md pt-6">
        <NavbarMenuItem>
          <Link className="w-full text-cyan-400 text-lg py-2" href="#">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full text-white text-lg py-2" href="#">
            All Facilities
          </Link>
        </NavbarMenuItem>
        
        {isLoggedIn && (
          <div className="mt-4 pt-4 border-t border-gray-800 flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Dashboard</p>
            <NavbarMenuItem>
              <Link className="w-full text-gray-300 text-base flex gap-2 items-center" href="#">
                <Calendar size={18} /> My Bookings
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link className="w-full text-gray-300 text-base flex gap-2 items-center" href="#">
                <PlusSquare size={18} /> Add Facility
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link className="w-full text-gray-300 text-base flex gap-2 items-center" href="#">
                <Settings size={18} /> Manage My Facilities
              </Link>
            </NavbarMenuItem>
          </div>
        )}
      </NavbarMenu>
    </Navbar>
  );
}


export default Nav;