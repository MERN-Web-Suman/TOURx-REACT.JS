
// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Suman Kumar</h2>
          <p className="text-gray-300 text-sm">
            Full Stack Developer passionate about creating modern, user-friendly, and high-performance web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition duration-300 cursor-pointer">Home</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Projects</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Awards</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 transition duration-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 transition duration-300">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Suman Kumar. All rights reserved.
      </div>
    </footer>
  );
}
