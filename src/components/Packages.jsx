import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import Slider from "react-slick";

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleBooking = (packageName) => {
    toast.success(`🎉 Booking Confirmed for ${packageName}!`);
  };

  const tourPackages = [
    {
      id: 1,
      name: "Bali Adventure",
      price: "$499",
      duration: "5 Days / 4 Nights",
      description:
        "Experience Bali's stunning beaches, temples, and vibrant nightlife with this adventure package.",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
      ],
      animation: "fade-up",
    },
    {
      id: 2,
      name: "Swiss Alps",
      price: "$899",
      duration: "7 Days / 6 Nights",
      description:
        "Explore the breathtaking Swiss Alps with guided tours, mountain adventures, and luxury stays.",
      images: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1520962919965-6c65b4f67f91?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      ],
      animation: "zoom-in",
    },
    {
      id: 3,
      name: "Maldives Retreat",
      price: "$699",
      duration: "6 Days / 5 Nights",
      description:
        "Relax at pristine beaches, crystal-clear waters, and overwater villas in the Maldives.",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
      ],
      animation: "flip-left",
    },
    {
      id: 4,
      name: "Paris Getaway",
      price: "$799",
      duration: "4 Days / 3 Nights",
      description:
        "Discover Paris with Eiffel Tower visits, Seine River cruise, and authentic French cuisine.",
      images: [
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1522098543979-ffc7f79d5f31?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80",
      ],
      animation: "flip-right",
    },
    {
      id: 5,
      name: "Dubai Luxury Tour",
      price: "$1099",
      duration: "6 Days / 5 Nights",
      description:
        "Experience Dubai’s skyscrapers, desert safari, shopping festivals, and luxury hotels.",
      images: [
   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
      ],
      animation: "fade-down",
    },
    {
      id: 6,
      name: "Thailand Explorer",
      price: "$599",
      duration: "5 Days / 4 Nights",
      description:
        "Visit Thailand’s beaches, temples, nightlife, and floating markets in this exotic package.",
      images: [
     "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
      ],
      animation: "fade-up-right",
    },
  ];

  // Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          🌍 Popular Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {tourPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-500 hover:shadow-2xl"
              data-aos={pkg.animation}
            >
              <img
                src={pkg.images[0]}
                alt={pkg.name}
                className="w-full h-52 object-cover transform hover:scale-110 transition duration-500"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-2">{pkg.duration}</p>
                <p className="text-lg font-bold mb-4">{pkg.price}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleBooking(pkg.name)}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-orange-600 hover:to-pink-600 text-white px-4 py-2 rounded-xl transition duration-300 shadow-md hover:scale-105"
                  >
                    Book Now
                  </button>
                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-2 rounded-xl transition duration-300 shadow-md hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal with Image Slider */}
        {selectedPackage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div
              className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative"
              data-aos="zoom-in"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
              >
                ✖
              </button>

              {/* Image Slider */}
              <Slider {...sliderSettings}>
                {selectedPackage.images.map((img, idx) => (
                  <div key={idx}>
                    <img
                      src={img}
                      alt={`${selectedPackage.name}-${idx}`}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                ))}
              </Slider>

              {/* Info */}
              <div className="mt-6">
                <h3 className="text-3xl font-bold mb-2">
                  {selectedPackage.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {selectedPackage.duration}
                </p>
                <p className="text-lg font-bold mb-4">
                  {selectedPackage.price}
                </p>
                <p className="text-gray-700 mb-6">
                  {selectedPackage.description}
                </p>

                <button
                  onClick={() => handleBooking(selectedPackage.name)}
                  className="w-full bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-600 hover:to-green-600 text-white px-6 py-3 rounded-xl transition duration-300 shadow-md hover:scale-105"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
