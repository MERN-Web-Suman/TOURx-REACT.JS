import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold animate-pulse">Codex2.0</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-white hover:text-yellow-300 transition duration-300">Home</a>
          <a href="#about" className="text-white hover:text-yellow-300 transition duration-300">About</a>
             <a href="#home" className="text-white hover:text-yellow-300 transition duration-300">contact</a>
          <a href="#about" className=" text-white hover:text-yellow-300 transition duration-300">Info</a>

          {/* Search Bar with Icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-1 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-300"
            />
            <FaSearch className="absolute left-3 top-2 text-gray-500" />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round" strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-300 px-4 pb-4 space-y-3 flex flex-col text-center">
            <a href="#home" className=" hover:text-yellow-300 transition duration-300">Home</a>
          <a href="#about" className=" hover:text-yellow-300 transition duration-300">About</a>
            <a href="#home" className=" hover:text-yellow-300 transition duration-300">contact</a>
          <a href="#about" className=" hover:text-yellow-300 transition duration-300">Info</a>
          

          
        </div>
      )}
    </header>
  );
};

export default Header;

