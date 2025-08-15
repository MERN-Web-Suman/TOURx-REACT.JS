
// ClientFeedback.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function ClientFeedback() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const clients = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Smith",
      feedback:
        "Suman is an incredibly talented developer! The project exceeded all my expectations.",
      rating: 5,
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Emily Johnson",
      feedback:
        "Working with Suman was a great experience. Highly professional and creative.",
      rating: 4,
    },
    {
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Michael Brown",
      feedback:
        "Amazing attention to detail and on-time delivery. Highly recommended!",
      rating: 5,
    },
    {
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Sophia Davis",
      feedback:
        "Suman turned my ideas into reality. I will definitely work with him again!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-16 px-6 flex flex-col items-center justify-center">
      {/* Heading */}
      <h1
        data-aos="fade-down"
        className="text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-purple-300 to-yellow-300 bg-clip-text text-transparent mb-4"
      >
        What Client Say
      </h1>
      <p
        data-aos="fade-up"
        className="text-gray-300 text-lg text-center max-w-2xl mb-10"
      >
        Discover what clients have to say about their experiences working with
        me. My client's satisfaction is my greatest achievement!
      </p>

      {/* Swiper Slider */}
      <div data-aos="zoom-in" className="w-full max-w-5xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-800/40 to-purple-600/40 backdrop-blur-lg border border-purple-500/20 p-6 rounded-xl shadow-lg transition-transform duration-300"
              >
                {/* Image */}
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-20 h-20 rounded-full mx-auto border-4 border-purple-400 shadow-lg"
                />

                {/* Name */}
                <h3 className="text-xl font-bold mt-4 text-center">
                  {client.name}
                </h3>

                {/* Star Rating */}
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`text-yellow-400 text-lg drop-shadow-lg ${
                        i < client.rating
                          ? "opacity-100"
                          : "opacity-30"
                      }`}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                {/* Review with animation */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-gray-300 text-center mt-3 text-sm leading-relaxed italic"
                >
                  "{client.feedback}"
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
