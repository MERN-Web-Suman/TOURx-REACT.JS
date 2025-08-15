
import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';

export default function ClientsSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  const clients = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500">
      <div className="max-w-7xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-10">
          My <span className="text-yellow-300">Awesome</span> Clients
        </h2>

        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center" data-aos="zoom-in" data-aos-duration="800">
              <div className="bg-white rounded-xl shadow-lg p-6 w-48 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                <img src={client.logo} alt={client.name} className="h-12 object-contain mb-3" />
                <p className="text-gray-800 font-semibold">{client.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
