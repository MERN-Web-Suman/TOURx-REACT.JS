import React from "react";
import { FaArrowRight, FaGraduationCap, FaCertificate, FaCode, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function MyResume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
      
      {/* Left Side */}
      <div data-aos="fade-right" className="lg:w-1/2 space-y-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
          MY RESUME
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Highly skilled and creative Web Developer with 5+ years of experience in crafting visually stunning and functionally robust websites and web applications.
        </p>

        {/* About Me */}
        <p className="text-md text-gray-400 leading-relaxed">
          Passionate about turning ideas into interactive digital experiences. Strong problem-solving skills, attention to detail, and a love for learning new technologies.
        </p>

        {/* Key Skills */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">Key Skills:</h3>
          <ul className="space-y-1 text-gray-300">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> HTML, CSS, JavaScript, React.js
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> Tailwind CSS & Responsive Design
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> Node.js, Express & MongoDB
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> API Integration & Optimization
            </li>
          </ul>
        </div>

        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition-all duration-300">
          View More <FaArrowRight />
        </button>
      </div>

      {/* Right Side */}
      <div data-aos="fade-left" className="lg:w-1/2 space-y-6">
        
        {/* Card 1 */}
        <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-800 to-purple-600 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
          <FaGraduationCap className="text-yellow-300 text-3xl" />
          <div>
            <h2 className="text-xl font-bold text-white">Bachelor of Science in Computer Science</h2>
            <p className="text-gray-300 text-sm">A comprehensive degree program focusing on programming, algorithms, and system design.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
          <FaCertificate className="text-yellow-400 text-3xl" />
          <div>
            <h2 className="text-xl font-bold text-white">Certified Web Developer</h2>
            <p className="text-gray-300 text-sm">Professional certification validating web development skills.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-800 to-green-600 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
          <FaCode className="text-yellow-400 text-3xl" />
          <div>
            <h2 className="text-xl font-bold text-white">Frontend Framework Proficiency Certification</h2>
            <p className="text-gray-300 text-sm">Expertise in React.js, Tailwind CSS, and modern frontend technologies.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
