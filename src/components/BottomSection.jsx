import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaSearch,
  FaUsers,
  FaChartBar,
  FaBullhorn,
  FaAngleRight,
  FaInfoCircle,
  FaCommentDots,
} from "react-icons/fa";

const BottomFooter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <footer  className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Digital Marketing */}
        <div data-aos="fade-up">
          <h3 className="text-xl font-bold mb-4 text-yellow-300">Digital Marketing</h3>
          <ul className="space-y-2 text-white/85">
            <li className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer transition"><FaSearch /> SEO Optimization</li>
            <li className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer transition"><FaBullhorn /> Social Media Ads</li>
            <li className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer transition"><FaUsers /> Audience Targeting</li>
            <li className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer transition"><FaChartBar /> Analytics Reports</li>
          </ul>
        </div>

        {/* Column 2: About */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-xl font-bold mb-4 text-yellow-300">About Us</h3>
          <ul className="space-y-2 text-white/85">
            <li className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer transition"><FaInfoCircle /> Our Story</li>
            <li className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer transition"><FaUsers /> Meet the Team</li>
            <li className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer transition"><FaAngleRight /> Careers</li>
            <li className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer transition"><FaCommentDots /> Testimonials</li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-bold mb-4 text-yellow-300">Contact</h3>
          <ul className="space-y-3 text-white/85">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> New Delhi, India</li>
            <li className="flex items-center gap-2"><FaEnvelope /> contact@digimarket.com</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 98765 43210</li>
          </ul>
        </div>

        {/* Column 4: Social Logos */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-bold mb-4 text-yellow-300">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="/" className="hover:text-yellow-300 transition"><FaFacebookF /></a>
            <a href="/" className="hover:text-yellow-300 transition"><FaTwitter /></a>
            <a href="/" className="hover:text-yellow-300 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-16 text-center border-t border-white/10 pt-6 text-sm text-white/60">
        © 2025 Suman Digital Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default BottomFooter;


