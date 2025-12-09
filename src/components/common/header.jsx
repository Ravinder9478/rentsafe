import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/img/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Properties", path: "/properties" },
    { label: "Locations", path: "/" },
    { label: "Why Us", path: "/" },
    { label: "Features", path: "/" },
    { label: "Owner/Agent", path: "/" },
  ];

  // Common button classes
  const baseBtn =
    "px-10 py-2 rounded-xl font-bold cursor-pointer text-base transition shadow-sm border";

  const loginDesktop =
    baseBtn +
    " text-black border-[#4A2FCC] bg-white " +
    "hover:text-white hover:bg-gradient-to-l hover:from-[#4A2FCC] hover:to-[#6B4EFF] hover:border-[#6B4EFF]";

  const signupDesktop =
    baseBtn +
    " text-white border-transparent bg-gradient-to-l from-[#4A2FCC] to-[#6B4EFF] " +
    "hover:border-[#6B4EFF] hover:from-[#3B21C0] hover:to-[#5C3BFF]";

  const loginMobile =
    baseBtn +
    " w-full text-black border-[#4A2FCC] bg-white " +
    "hover:text-white hover:bg-gradient-to-l hover:from-[#4A2FCC] hover:to-[#6B4EFF] hover:border-[#6B4EFF]";

  const signupMobile =
    baseBtn +
    " w-full text-white border-transparent bg-gradient-to-l from-[#4A2FCC] to-[#6B4EFF] " +
    "hover:border-[#6B4EFF] hover:from-[#3B21C0] hover:to-[#5C3BFF]";

  return (
    <header className="bg-white shadow-sm sticky top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-[88px] px-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Rent Safe logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center font-normal leading-6 gap-8 text-base text-[#2B2F38]">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`relative pb-1 transition-colors ${
                  isActive ? 'text-primary' : 'text-[#2B2F38] hover:text-[#111827]'
                }
                 after:content-[''] after:absolute after:left-0 after:bottom-0
                 after:h-0.5 ${isActive ? 'after:w-full' : 'after:w-0'} after:bg-gradient-to-r
                 after:from-[#4A2FCC] after:to-[#6B4EFF]
                 after:rounded-full after:transition-all after:duration-300
                 hover:after:w-full cursor-pointer`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Auth buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/properties" className={loginDesktop}>Login</Link>
          <button className={signupDesktop}>Sign Up</button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full 
                     border border-[#E5E7EB] bg-white"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <IoClose size={22} /> : <HiBars3 size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-[#E5E7EB] transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4 bg-[#FFFFFFE5]">
          {/* Links */}
          <nav className="flex flex-col gap-2 text-base text-[#2B2F38]">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-left py-1 hover:text-[#111827] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth buttons - stacked for mobile */}
          <div className="flex flex-col gap-3 mt-2">
            <Link to="/properties" className={loginMobile} onClick={() => setIsOpen(false)}>Login</Link>
            <button className={signupMobile}>Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

 