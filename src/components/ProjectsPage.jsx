
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaMobileAlt, FaFileCode, FaBolt, FaUsers, FaShoppingCart, FaDatabase, FaCloud } from "react-icons/fa";

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

   const projects = [
    {
      title: "Frontend Web Development",
      desc: "Building responsive and user-friendly web interfaces using modern technologies like React, Tailwind CSS, and JavaScript.",
      icon: <FaCode className="text-4xl text-blue-500 mb-3" />,
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    },
    {
      title: "Mobile App Development",
      desc: "Designing and developing cross-platform mobile applications with smooth performance and rich UI.",
      icon: <FaMobileAlt className="text-4xl text-green-500 mb-3" />,
      img: "https://images.unsplash.com/photo-1551817958-20204d6ab3b2",
    },
    {
      title: "Landing Page Development",
      desc: "Crafting high-conversion landing pages optimized for speed, SEO, and user engagement.",
      icon: <FaFileCode className="text-4xl text-purple-500 mb-3" />,
      img: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    },
    {
      title: "Web Optimization",
      desc: "Enhancing website speed, SEO ranking, and overall performance for better user retention.",
      icon: <FaBolt className="text-4xl text-yellow-500 mb-3" />,
      img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    },
    {
      title: "User-Centric Design",
      desc: "Creating intuitive designs focused on providing an engaging and seamless user experience.",
      icon: <FaUsers className="text-4xl text-pink-500 mb-3" />,
      img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    },
    {
      title: "E-commerce Development",
      desc: "Building secure and scalable online stores with seamless checkout experiences.",
      icon: <FaShoppingCart className="text-4xl text-orange-500 mb-3" />,
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Backend Development",
      desc: "Creating robust backend systems with Node.js, Express, and secure API integrations.",
      icon: <FaDatabase className="text-4xl text-red-500 mb-3" />,
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    },
    {
      title: "Cloud Integration",
      desc: "Integrating cloud solutions like AWS, Firebase, and Azure for scalable applications.",
      icon: <FaCloud className="text-4xl text-indigo-500 mb-3" />,
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
     {
      title: "E-commerce Development",
      desc: "Building secure and scalable online stores with seamless checkout experiences.",
      icon: <FaShoppingCart className="text-4xl text-orange-500 mb-3" />,
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
  ];
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4" data-aos="fade-up">
          My Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-cyan-500/50"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img src={project.img} alt={project.title} className="w-full h-40 object-contain bg-gray-900 p-4" />
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                {project.icon}
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <button className="mt-auto bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition duration-300">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
