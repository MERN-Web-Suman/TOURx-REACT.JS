
// Footer.jsx
import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const quickLinks = ["Destinations", "Packages", "Blog", "Contact"];
  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li
                key={link}
                className="mb-2 cursor-pointer text-gray-300 hover:text-pink-500 transition-colors duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Info</h3>
          <p className="mb-2">📍 123 Travel Street, Wanderlust City</p>
          <p className="mb-2">📞 +91 9876543210</p>
          <p>✉️ info@tourapp.com</p>
        </div>

        {/* Social Icons */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r from-pink-500 to-purple-500 text-white transform hover:scale-110 transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm" data-aos="fade-up" data-aos-delay="600">
        © {new Date().getFullYear()} TourApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
