import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { assets } from "../assets/asset";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 right-0 left-0 md:flex md:justify-between md:items-center md:px-[50px] bg-white shadow-md rounded-b-3xl">
      {/* Logo and Menu Toggle */}
      <div className="flex items-center justify-between px-6 h-[64px]">
        <Link to="/">
          <img src={assets.LogoTemp} alt="Logo" />
        </Link>
        <span className="text-2xl md:hidden">
          {isMenuOpen ? (
            <X onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <Menu onClick={toggleMenu} className="cursor-pointer" />
          )}
        </span>
      </div>

      {/* Menu Items */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } bg-white text-base font-medium md:inline-block text-[#5D6165]`}
      >
        <ul className="md:flex md:flex-row items-center font-bold leading-[64px] text-[18px] md:text-[16px]">
          <Link to="/adddomain">
            <li className="px-[10px] hover:bg-[#B1B1B1] cursor-pointer">
              Add domain
            </li>
          </Link>

          <Link to="/articles">
            <li className="px-[10px] hover:bg-[#B1B1B1] cursor-pointer">
              Articles
            </li>
          </Link>

          <Link to="/contactus">
            <li className="px-[10px] hover:bg-[#B1B1B1] cursor-pointer">
              Contact Us
            </li>
          </Link>

          <Link to="/API">
            <li className="px-[10px] hover:bg-[#B1B1B1] cursor-pointer">API</li>
          </Link>

          <Link to="/#" className="mr-1">
            <li className="px-[10px] hover:bg-[#B1B1B1] cursor-pointer flex items-center">
              English
              <ChevronDown />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
