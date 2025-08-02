import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChartLine, FaSearch, FaLightbulb } from "react-icons/fa";

const features = [
  {
    title: "Marketing Analysis",
    desc:
      "Understand your market trends, customer behavior, and campaign performance to make informed decisions.",
    color: "from-indigo-500 to-blue-500",
    icon: <FaChartLine size={40} />,
    aos: "fade-up",
  },
  {
    title: "SEO Consultancy",
    desc:
      "Improve search engine visibility, optimize your content strategy, and drive more organic traffic to your site.",
    color: "from-pink-500 to-red-400",
    icon: <FaSearch size={40} />,
    aos: "fade-up",
  },
  {
    title: "Keyword Research",
    desc:
      "Discover the best-performing keywords for your business to outrank competitors and grow faster.",
    color: "from-green-400 to-teal-500",
    icon: <FaLightbulb size={40} />,
    aos: "fade-up",
  },
];

const MarketingFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 animate-gradient-x opacity-30 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          data-aos="fade-down"
          className="text-4xl font-bold text-center text-gray-700 animate-pulse mb-12 drop-shadow-lg"
        >
          🚀 Marketing Features
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos={feature.aos}
              data-aos-delay={index * 150}
              className={`bg-gradient-to-br ${feature.color} text-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-500 hover:shadow-2xl`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/90 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingFeatures;








