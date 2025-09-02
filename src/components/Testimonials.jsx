
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Verma",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "This travel agency planned my Bali trip perfectly! Great hotels and best service.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Amazing experience, smooth booking process and wonderful support team.",
    rating: 4,
  },
  {
    id: 3,
    name: "Arjun Patel",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "Loved the luxury package. Everything was premium and well organized.",
    rating: 5,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="relative py-16 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white overflow-hidden"
      id="testimonials"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>

      <div className="relative container mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          What Our Clients Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="px-4">
              <div
                className="bg-white/90 text-gray-800 rounded-2xl shadow-xl p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
                data-aos="zoom-in"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-500 shadow-lg"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg text-gray-900">
                      {t.name}
                    </h4>
                    <div className="flex">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{t.review}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
