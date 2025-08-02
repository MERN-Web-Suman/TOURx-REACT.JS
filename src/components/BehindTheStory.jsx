import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BehindTheStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Behind the Story of</h2>
          <h3 className="text-2xl sm:text-3xl text-yellow-300 font-semibold mb-6">Digital Agency</h3>

          <button className="bg-white text-black px-6 py-2 font-medium rounded-full hover:bg-yellow-400 transition duration-300 mb-10">
            Read Story
          </button>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "250+", subtitle: "Projects Done" },
              { title: "250", subtitle: "Awards Won" },
              { title: "70+", subtitle: "Consultants" },
              { title: "150+", subtitle: "Happy Clients" },
            ].map((card, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                <h4 className="text-3xl font-bold text-yellow-300">{card.title}</h4>
                <p className="text-lg">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div data-aos="fade-left" className="flex justify-center md:justify-end">
          <img
            src="ai.jpeg"
            alt="Digital Agency"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default BehindTheStory;
