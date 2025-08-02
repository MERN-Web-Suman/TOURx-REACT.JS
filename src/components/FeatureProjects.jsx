import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullhorn, FaSearchDollar, FaChartLine, FaPenNib } from "react-icons/fa";

const projectFeatures = [
  {
    title: "Marketing Strategy",
    description:
      "Crafting targeted plans that align your brand with audience needs, ensuring long-term growth.",
    icon: <FaBullhorn className="text-4xl text-yellow-300" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your visibility with cutting-edge SEO techniques to rank higher and drive traffic.",
    icon: <FaSearchDollar className="text-4xl text-green-300" />,
  },
  {
    title: "Data Analytics",
    description:
      "Turn insights into action with comprehensive data reports and trend analysis tools.",
    icon: <FaChartLine className="text-4xl text-purple-300" />,
  },
  {
    title: "Content Creation",
    description:
      "Engaging visuals and impactful content that connects, converts, and retains audiences.",
    icon: <FaPenNib className="text-4xl text-pink-300" />,
  },
];

const FeatureProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-tr from-[#1e1e2f] via-[#2a2a40] to-[#1f1f38]">
      <div className="max-w-7xl mx-auto">
         {/* Heading & Button */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-white">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-pulse">
              Featured
            </span>
            <span className="text-yellow-500"> Projects</span>
          </h2>
          <button className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectFeatures.map((feature, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="bg-white/10 border border-white/20 rounded-xl p-6 text-white shadow-xl hover:shadow-yellow-400/30 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProjects;


