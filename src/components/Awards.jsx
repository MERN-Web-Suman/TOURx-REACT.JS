// src/pages/AwardsTimeline.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const awards = [
  {
    year: "2021",
    title: "Best Frontend Developer",
    desc: "Recognized for outstanding UI/UX design and frontend performance optimization.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Award_icon.svg/1024px-Award_icon.svg.png",
  },
  {
    year: "2020",
    title: "Backend Developer Excellence",
    desc: "Awarded for building secure, scalable, and high-performance backend APIs.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Gold_medal_icon.svg/1024px-Gold_medal_icon.svg.png",
  },
  {
    year: "2019",
    title: "Hackathon Winner",
    desc: "Winner of a 48-hour national hackathon competition.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Trophy_icon.svg/1024px-Trophy_icon.svg.png",
  },
  {
    year: "2018",
    title: "Best Student Award",
    desc: "Awarded for academic excellence and leadership in college events.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Award_ribbon_icon.svg/1024px-Award_ribbon_icon.svg.png",
  },
  {
    year: "2017",
    title: "Coding Champion",
    desc: "Champion in inter-college coding competition.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Medal_icon.svg/1024px-Medal_icon.svg.png",
  },
];

export default function AwardsTimeline() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3" data-aos="fade-down">
          Awards & Achievements Timeline
        </h1>
        <p className="text-lg text-gray-300" data-aos="fade-up">
          A journey through my professional milestones.
        </p>
      </div>

      <div className="relative border-l border-gray-500 max-w-4xl mx-auto">
        {awards.map((award, index) => (
          <div
            key={index}
            className={`mb-10 ml-6 flex flex-col gap-3 relative`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* Dot */}
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full ring-4 ring-purple-300"></span>

            {/* Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 hover:bg-white/20 transition duration-300">
              <div className="flex items-center gap-4">
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold">{award.title}</h3>
                  <span className="text-sm text-purple-300">{award.year}</span>
                </div>
              </div>
              <p className="mt-3 text-gray-300">{award.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
