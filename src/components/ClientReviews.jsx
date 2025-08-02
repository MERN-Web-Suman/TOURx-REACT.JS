import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const clients = [
  {
    name: "Suman Sharma",
    image: "/client1.jpg",
    text: "Amazing service! Their SEO strategy helped us grow 200% in traffic.",
    rating: 5,
  },
  {
    name: "Suman Verma",
    image: "/client2.jpg",
    text: "Their team is smart, creative, and always delivers on time!",
    rating: 4,
  },
  {
    name: "Suman Mehta",
    image: "/client3.jpg",
    text: "Loved their transparency, professionalism, and communication.",
    rating: 5,
  },
  {
    name: "Suman Joshi",
    image: "/client4.jpg",
    text: "Fantastic marketing experience with measurable results.",
    rating: 4,
  },
];

const ClientReviews = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: false });
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-4"
          data-aos="fade-up"
        >
          What’s Your <span className="text-yellow-400">Client Say</span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto" data-aos="fade-up">
          Hear directly from our clients about how we helped them achieve their digital goals.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={40}
        slidesPerView={1}
        className="max-w-4xl mx-auto"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white bg-opacity-10 backdrop-blur-xl p-8 rounded-3xl text-center transition-all duration-500 hover:scale-[1.02]"
              data-aos="zoom-in-up"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400"
              />
              <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                {client.name}
              </h3>
              <p className="text-white/90 mb-4">{client.text}</p>
              <div className="flex justify-center gap-1">
                {Array(client.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 text-center text-white/70 text-sm animate-pulse">
        Use left/right arrows to navigate the reviews →
      </div>
    </section>
  );
};

export default ClientReviews;


