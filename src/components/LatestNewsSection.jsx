import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import VanillaTilt from "vanilla-tilt";
import "aos/dist/aos.css";
import {
  FaGlobe,
  FaBullhorn,
  FaRobot,
  FaChartLine,
  FaShareAlt,
  FaTimes,
} from "react-icons/fa";

const news = [
  {
    title: "AI in Digital Marketing Today",
    desc: "Explore how AI is transforming customer engagement...",
    icon: <FaRobot size={34} />,
    author: "Suman Kumar",
    date: "Aug 1, 2025",
    bg: "from-[#3a1c71] via-[#d76d77] to-[#ffaf7b]",
  },
  {
    title: "Top 5 SEO Trends",
    desc: "Stay updated on new SEO strategies...",
    icon: <FaChartLine size={34} />,
    author: "Neha Joshi",
    date: "July 28, 2025",
    bg: "from-[#16222A] via-[#3A6073] to-[#1a1a2e]",
  },
  {
    title: "Social Media Ad Revolution",
    desc: "Instagram & LinkedIn now boost sales better than ever...",
    icon: <FaBullhorn size={34} />,
    author: "Rahul Mehra",
    date: "July 25, 2025",
    bg: "from-[#2980B9] to-[#6DD5FA]",
  },
  {
    title: "Global Marketing in 2025",
    desc: "Reach international audiences using AI-driven campaigns...",
    icon: <FaGlobe size={34} />,
    author: "Aarti Sharma",
    date: "July 20, 2025",
    bg: "from-[#fc4a1a] to-[#f7b733]",
  },
];

const LatestNewsSection = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const tiltRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    tiltRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
        });
      }
    });
  }, []);

  return (
    <>
      <section className="py-24 px-6 bg-gradient-to-br from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl font-bold mb-6 md:mb-0">
            Our <span className="text-yellow-400">Latest News</span>
          </h2>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300">
            See All News
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {news.map((item, index) => (
            <div
              key={index}
              ref={(el) => (tiltRefs.current[index] = el)}
              data-aos="zoom-in-up"
              className={`relative bg-gradient-to-br ${item.bg} p-6 rounded-2xl shadow-2xl group transition-all`}
            >
              <div className="absolute -inset-1 bg-gradient-to-tr from-white/10 to-white/5 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-sm mb-4 text-white/90 truncate">{item.desc}</p>

                <button
                  onClick={() => setSelectedNews(item)}
                  className="mt-2 bg-white text-black px-4 py-1 rounded-full font-medium hover:bg-yellow-400 transition duration-300"
                >
                  Read More
                </button>

                <div className="flex items-center justify-between mt-6 text-xs text-white/80">
                  <span>By {item.author}</span>
                  <span>{item.date}</span>
                  <FaShareAlt className="hover:text-yellow-300 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl w-full max-w-xl relative shadow-2xl">
            <button
              className="absolute top-3 right-4 text-xl text-gray-600 hover:text-red-600"
              onClick={() => setSelectedNews(null)}
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-bold mb-3">{selectedNews.title}</h3>
            <p className="text-sm mb-4 text-gray-800">{selectedNews.desc}</p>
            <div className="text-xs text-gray-500 flex justify-between">
              <span>By {selectedNews.author}</span>
              <span>{selectedNews.date}</span>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#2c3e50] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6 text-white/90">
            Get the latest marketing updates, insights, and strategies delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-full w-full sm:w-[300px] focus:outline-none text-black"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LatestNewsSection;



