import React from "react";


const HeroSection = () => {
  const scrollToSection = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-xy text-white">
      {/* Gradient animated background blob */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 opacity-20 blur-3xl animate-pulse z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            🌟 Unlock Your Brand with{" "}
            <span className="text-yellow-300 animate-pulse">Digital Marketing</span>
          </h2>

             <p className="text-lg text-white/90">
            Grow with SEO, Ads, Email Campaigns & Branding 🚀
          </p>

             <button
            onClick={scrollToSection}
            className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg  hover:scale-105 transition-all duration-300 animate-bounce"
          >
            Get Started 🚀
          </button>
        </div>

        {/* Right Image Content */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="OIP.jpeg"
            alt="Digital Marketing"
            className="w-full max-w-md mx-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

