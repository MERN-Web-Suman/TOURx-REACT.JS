import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBullhorn,
  FaChartBar,
  FaSearch,
  FaCogs,
  FaLightbulb,
  FaClipboardList,
} from "react-icons/fa";

const services = [
  {
    title: "Management & Marketing",
    desc: "We manage your marketing strategies and campaigns to ensure business success through smart management.",
    icon: <FaChartBar size={36} />,
    bg: "from-purple-500 to-indigo-500",
  },
  {
    title: "Strategy & Research",
    desc: "Our team analyzes market trends and builds smart strategies based on deep research and performance data.",
    icon: <FaLightbulb size={36} />,
    bg: "from-teal-500 to-cyan-500",
  },
  {
    title: "Onsite SEO",
    desc: "We improve your website structure, meta tags, and internal links to boost onsite SEO performance.",
    icon: <FaSearch size={36} />,
    bg: "from-green-500 to-emerald-400",
  },
  {
    title: "Technical SEO",
    desc: "We fix backend issues, page speed, and indexation to enhance technical performance on search engines.",
    icon: <FaCogs size={36} />,
    bg: "from-yellow-500 to-orange-500",
  },
  {
    title: "Media Promotion",
    desc: "Our creative team promotes your brand through media, influencers, and engaging social strategies.",
    icon: <FaBullhorn size={36} />,
    bg: "from-pink-500 to-red-400",
  },
  {
    title: "Report & Analysis",
    desc: "We provide detailed reports and analytics that show campaign results and future growth insights.",
    icon: <FaClipboardList size={36} />,
    bg: "from-sky-500 to-blue-500",
  },
];

const BusinessServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // So it animates every scroll
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-20 px-6 text-white bg-gradient-to-tr from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] bg-[length:200%_200%] animate-gradientX">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">A Digital Agency Providing</h2>
        <h3 className="text-2xl text-yellow-400 font-semibold">Business Services</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`bg-gradient-to-br ${service.bg} text-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-500 hover:shadow-2xl`}
          >
            <div className="mb-4 text-white">{service.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-white/90 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessServicesSection;
