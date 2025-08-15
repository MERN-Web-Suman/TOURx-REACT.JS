// SkillsPage.jsx
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiFirebase,
} from "react-icons/si";

AOS.init({
  duration: 1000,
  once: false,
});

export default function SkillsPage() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" />, category: "Frontend" },
    { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" />, category: "Frontend" },
    { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" />, category: "Frontend" },
    { name: "React.js", icon: <FaReact size={40} className="text-cyan-400" />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-sky-400" />, category: "Frontend" },
    { name: "Bootstrap", icon: <FaBootstrap size={40} className="text-purple-500" />, category: "Frontend" },

    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" />, category: "Backend" },
    { name: "Express.js", icon: <SiExpress size={40} className="text-gray-300" />, category: "Backend" },
    { name: "REST API", icon: <SiPostman size={40} className="text-orange-400" />, category: "Backend" },

    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" />, category: "Database" },
    { name: "MySQL", icon: <SiMysql size={40} className="text-blue-400" />, category: "Database" },

    { name: "Git & GitHub", icon: <FaGitAlt size={40} className="text-red-500" />, category: "Tools" },
    { name: "Postman", icon: <SiPostman size={40} className="text-orange-500" />, category: "Tools" },
    { name: "Docker", icon: <FaDocker size={40} className="text-blue-400" />, category: "Tools" },
    { name: "Firebase", icon: <SiFirebase size={40} className="text-yellow-400" />, category: "Tools" },
    { name: "AWS Basics", icon: <FaAws size={40} className="text-yellow-500" />, category: "Tools" },
  ];

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-[#0e0f1a] via-[#1b1f36] to-[#12121f] text-white">
      {/* Headline */}
      <h1
        data-aos="fade-down"
        className="text-center text-5xl font-bold mb-4 bg-gradient-to-r from-[#f0c27b] via-[#4b6cb7] to-[#182848] bg-clip-text text-transparent"
      >
        My Skills
      </h1>

      {/* Subheading */}
      <p
        data-aos="fade-up"
        className="text-center max-w-2xl mx-auto text-lg text-gray-300 mb-12"
      >
        <span className="block text-2xl font-semibold mb-2 text-[#f0c27b]">
          What I Do
        </span>
        I'm not just a developer; I'm a digital dreamweaver. Crafting immersive
        online experiences is not just a job but my calling. Discover below how
        I can help you.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="p-6 rounded-2xl bg-gradient-to-br from-[#1f2235] via-[#262b45] to-[#1b1e2d] shadow-lg 
              hover:scale-110 hover:shadow-[0_0_20px_rgba(255,215,0,0.7)] hover:from-[#2e335a] hover:via-[#3f436b] hover:to-[#1b1e2d]
              transition-all duration-300 ease-out cursor-pointer flex flex-col items-center border border-transparent hover:border-yellow-400"
          >
            {skill.icon}
            <h3 className="text-xl font-semibold text-[#f0c27b] mt-3">{skill.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{skill.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


