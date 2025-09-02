
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Shield, Globe2, Hotel, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const features = [
    {
      id: 1,
      title: "Worldwide Tours",
      desc: "Explore destinations across the globe with curated travel experiences.",
      icon: <Globe2 size={40} />,
      aos: "fade-up",
    },
    {
      id: 2,
      title: "Best Price Guarantee",
      desc: "Get the best travel deals with transparent and affordable pricing.",
      icon: <Shield size={40} />,
      aos: "fade-up",
    },
    {
      id: 3,
      title: "Luxury Hotels",
      desc: "Stay at premium hotels and resorts with world-class hospitality.",
      icon: <Hotel size={40} />,
      aos: "fade-up",
    },
    {
      id: 4,
      title: "24/7 Support",
      desc: "Our travel experts are available anytime to assist you.",
      icon: <Headphones size={40} />,
      aos: "fade-up",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
            Why Choose <span className="text-pink-600">Us?</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We make your travel experience premium, safe, and memorable with
            our best-in-class services.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              data-aos={item.aos}
              className="group bg-white p-8 rounded-2xl shadow-md border border-indigo-100 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer
              hover:bg-gradient-to-br hover:from-indigo-600 hover:to-pink-600"
            >
              <div className="text-indigo-600 group-hover:text-white transition duration-300 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 group-hover:text-indigo-100 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
