
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const navLinks = ["Home", "Destinations", "Packages", "About", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 shadow-lg">
      <nav
        className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto"
        data-aos="fade-down"
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide cursor-pointer hover:scale-105 transition-transform">
          🌍 TourX
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="relative group cursor-pointer"
            >
              <span className="hover:text-yellow-300 transition-colors">
                {link}
              </span>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-300 transition-transform hover:scale-105">
            Login
          </button>
          <button className="px-4 py-2 bg-white text-indigo-700 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition-transform hover:scale-105">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-indigo-900 text-white flex flex-col items-center py-6 space-y-6"
          data-aos="fade-down"
        >
          {navLinks.map((link, index) => (
            <span
              key={index}
              className="hover:text-yellow-300 text-lg font-medium transition-colors"
            >
              {link}
            </span>
          ))}
          <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-300 transition-transform hover:scale-105">
            Login
          </button>
          <button className="px-4 py-2 bg-white text-indigo-700 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition-transform hover:scale-105">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}
