"use client";
import React, { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-600 text-white px-4 md:px-8 py-4 flex items-center justify-between font-sans shadow-lg" data-aos="fade-down" data-aos-duration="3000">
      <div className="flex items-center space-x-4">
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <div className="font-extrabold text-2xl tracking-wide text-white">
          Shop<span className="text-yellow-400">Ease</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center bg-white text-gray-800 rounded-full px-4 py-2 w-[300px] lg:w-[400px] shadow-inner">
          <FiSearch className="text-gray-500 text-lg mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent focus:outline-none text-sm placeholder-gray-500 w-full"
          />
        </div>
        <FiShoppingCart className="text-2xl cursor-pointer hover:text-yellow-400 transition" />
        <FiUser className="text-2xl cursor-pointer hover:text-yellow-400 transition" />
      </div>
    </nav>
  );
};

export default Navbar;
