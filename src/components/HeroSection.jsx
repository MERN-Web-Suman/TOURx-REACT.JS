import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-hot-toast";

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1600&q=80",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Toast Handler
  const handleBookNow = () => {
    toast.success("Booking process started 🚀", {
      position: "top-center",
    });
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Tagline */}
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          data-aos="fade-up"
        >
          Explore the World with Us
        </h1>

        {/* Search Bar */}
        <div
          className="bg-white rounded-2xl shadow-lg p-4 flex flex-col md:flex-row items-center gap-4 md:gap-2 mb-6"
          data-aos="zoom-in"
        >
          <input
            type="text"
            placeholder="Destination"
            className="w-full md:w-1/3 px-4 py-2 rounded-xl border focus:outline-none text-gray-700"
          />
          <input
            type="date"
            className="w-full md:w-1/4 px-4 py-2 rounded-xl border focus:outline-none text-gray-700"
          />
          <input
            type="number"
            placeholder="Travelers"
            className="w-full md:w-1/4 px-4 py-2 rounded-xl border focus:outline-none text-gray-700"
          />
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-2 rounded-xl transition duration-300 shadow-md hover:scale-105">
            Search
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4" data-aos="fade-up">
          <button
            onClick={handleBookNow}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600 px-6 py-3 rounded-2xl text-lg font-semibold transition transform hover:scale-110 shadow-lg"
          >
            Book Now
          </button>
          <button className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-600 hover:to-green-600 px-6 py-3 rounded-2xl text-lg font-semibold transition transform hover:scale-110 shadow-lg">
            Popular Packages
          </button>
        </div>
      </div>
    </section>
  );
}
