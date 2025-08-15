
import React from "react";
import { FaSchool, FaUniversity, FaLaptopCode, FaCodeBranch } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({ duration: 1200, once: false });

const achievements = [
  {
    year: "2018",
    title: "Completed 10th Grade",
    description: "Achieved strong academic results with a focus on science and mathematics.",
    icon: <FaSchool />,
    color: "#4CAF50", // Green
  },
  {
    year: "2020",
    title: "Completed 12th Grade",
    description: "Specialized in the science stream with excellent marks in Physics, Chemistry, and Math.",
    icon: <FaSchool />,
    color: "#2196F3", // Blue
  },
  {
    year: "2023",
    title: "Bachelor of Science in Computer Science",
    description: "Graduated with top honors, focusing on software engineering and modern web technologies.",
    icon: <FaUniversity />,
    color: "#FFD700", // Gold
  },
  {
    year: "2024",
    title: "Frontend Framework Proficiency",
    description: "Certified expertise in React.js, Tailwind CSS, and other frontend frameworks.",
    icon: <FaLaptopCode />,
    color: "#FF69B4", // Pink
  },
  {
    year: "2025",
    title: "Backend Developer",
    description: "Skilled in building robust APIs and databases using Node.js, Express, and MongoDB.",
    icon: <FaCodeBranch />,
    color: "#FF5722", // Orange
  },
   {
    year: "2027",
    title: "Mern Stack Developer",
    description: "Skilled in building robust APIs and databases using Node.js, Express, and MongoDB.",
    icon: <FaCodeBranch />,
    color: "#FF5722", // Orange
  },
];

export default function Achievements() {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl font-bold mb-2">Achievements & Certifications</h2>
          <p className="text-lg text-gray-300">A journey of hard work, dedication, and growth.</p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-white/30 ml-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="mb-12 ml-6 group"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <span
                className="absolute -left-8 flex items-center justify-center w-12 h-12 rounded-full text-white text-2xl shadow-lg transition-transform duration-300 group-hover:scale-125"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </span>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:bg-white/20">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <span className="text-sm text-gray-300">{item.year}</span>
                <p className="mt-2 text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
