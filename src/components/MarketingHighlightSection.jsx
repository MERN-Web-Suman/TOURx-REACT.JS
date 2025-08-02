
import React from "react";


const MarketingHighlightSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#0f2027] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Image */}
        <div className="w-full  md:w-1/2">
          <img
            src="sip.jpeg"
            alt="Digital Marketing"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We are the <span className="text-yellow-400">#1 Ranked</span> <br />
            Digital Marketing Agency
          </h2>
          <p className="text-white/90 mb-8 text-lg leading-relaxed">
            We help businesses grow by creating highly effective online marketing strategies, 
            improving brand presence, and driving measurable results. Our team is dedicated to providing 
            innovative solutions that deliver success.
          </p>
          
          {/* About Us Button */}
          <a
            href="#about"
            className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500 animate-pulse"
          >
            About Us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketingHighlightSection;
