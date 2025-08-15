import React from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 text-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
            Hii, I am Suman Kumar
          </h1>
          <h2 className="text-2xl sm:text-3xl mt-4 text-gray-800 font-semibold">
            Welcome to my Web Development Portfolio!
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            I am a passionate full-stack developer specializing in creating interactive, responsive, and visually appealing web applications. With experience in React.js, Node.js, and modern design trends, I strive to deliver high-quality digital experiences for businesses and individuals.
          </p>
          
          {/* Email Input */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-purple-400 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition shadow-md"
            />
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 transition font-semibold shadow-lg text-white">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Premium Design with Web Development Content */}
        <div
          className="relative flex items-center justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        > <div className="absolute w-72 h-72 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 rounded-2xl shadow-lg transform -rotate-6 hover:rotate-0 transition duration-500"></div>
          <div className="w-80 h-auto bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition duration-500 text-white font-bold p-6">
            <h3 className="text-2xl mb-3">Web Development</h3>
            <p className="text-sm font-normal leading-relaxed">
              I build modern, fast, and responsive websites using the latest
              technologies like React.js, Node.js, and Tailwind CSS. My focus is
              on creating user-friendly experiences with clean, maintainable
              code and visually stunning designs that help businesses grow in
              the digital world.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  );
}

