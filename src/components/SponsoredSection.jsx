import React from "react";
import Marquee from "react-fast-marquee";

const sponsors = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    url: "https://www.google.com",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    url: "https://www.amazon.com",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    url: "https://www.microsoft.com",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
    url: "https://www.netflix.com",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    url: "https://www.spotify.com",
  },
];

const SponsoredSection = () => {
  return (
    <section className="py-20 px-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#141e30] via-[#243b55] to-[#0f2027] animate-gradient-x">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-pulse mb-12">
          🌟 Sponsored By World-Class Brands
        </h2>

        <Marquee gradient={false} speed={60} pauseOnHover>
          {sponsors.map((sponsor, idx) => (
            <a
              key={idx}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center mx-8 group transition-all duration-300 hover:scale-105"
            >
              <div className="w-24 h-24 bg-white/10 border border-white/20 rounded-xl shadow-lg backdrop-blur-md flex items-center justify-center p-4 group-hover:shadow-yellow-500/30 transition-all duration-300">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-3 text-white text-sm font-semibold group-hover:text-yellow-300 transition-all duration-300">
                {sponsor.name}
              </span>
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default SponsoredSection;


