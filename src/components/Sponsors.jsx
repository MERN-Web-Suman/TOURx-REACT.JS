import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

const Sponsors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const sponsors = [
    {
      id: 1,
      logo: "https://m.discgolfscene.com/flyers/tournaments/59003/17th-night-owl-tour-sponsored-by-4th-meridian-brewing-and-okanagan-disc-supply-supported-by-innova-1678488340-large.jpg", // Emirates Airlines
    },
    {
      id: 2,
      logo: "https://m.discgolfscene.com/flyers/tournaments/43670/fgdg-nc-am-tour-2022-pinehurst-sponsored-by-dynamic-discs-1637155318-large.jpg", // Qatar Airways
    },
    {
      id: 3,
      logo: "https://www.musiclipse.com/wp-content/uploads/2024/05/The-Rolling-Stones-Official-Poster-to-the-Hackney-diamonds-2024-tour.jpg", // Marriott Hotels
    },
    {
      id: 4,
      logo: "https://tse3.mm.bing.net/th/id/OIP.vQMqFki_143rpjMX3fXzKwHaHa?pid=Api&P=0&h=180", // Hyatt Hotels
    },
    {
      id: 5,
      logo: "https://1000logos.net/wp-content/uploads/2021/05/Booking.Com-logo.png", // Booking.com
    },
    {
      id: 6,
      logo: "https://tse4.mm.bing.net/th/id/OIP.3Lk1qEA5VzNw0OigTpJnygHaHa?pid=Api&P=0&h=180", // Airbnb
    },
  ];

  // Carousel Settings
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
          data-aos="fade-up"
        >
          Our Trusted Partners
        </h2>

        <Slider {...settings}>
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="flex justify-center px-4"
            >
              <div className="p-4 rounded-2xl bg-white shadow-md hover:shadow-2xl transition duration-500 hover:scale-105 flex justify-center">
                <img
                  src={sponsor.logo}
                  alt="sponsor"
                  className="h-12 md:h-14 lg:h-16 grayscale hover:grayscale-0 transition duration-500 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sponsors;

