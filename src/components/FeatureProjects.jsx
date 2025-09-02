import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80", title: "Mountain Adventure" },
  { id: 2, src: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80", title: "Beach Paradise" },
  { id: 3, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", title: "Nature Escape" },
  { id: 4, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80", title: "Desert Safari" },
  { id: 5, src: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80", title: "City Nights" },
  { id: 6, src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80", title: "Cultural Tour" },
];

export default function FeatureProjects() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          ✨ Feature Projects / Gallery
        </h2>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, index) => (
            <div
              key={img.id}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group transform hover:rotate-1 hover:-translate-y-2 transition-all duration-500"
              onClick={() => setLightboxIndex(index)}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full rounded-2xl transform group-hover:scale-110 transition duration-700"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-700/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center">
                <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-lg">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="relative max-w-5xl mx-auto p-4">
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].title}
              className="rounded-2xl shadow-2xl max-h-[80vh] mx-auto transition-transform duration-500"
            />
            <p className="text-center text-white text-xl mt-4">{images[lightboxIndex].title}</p>

            {/* Close Button */}
            <button
              className="absolute top-2 right-4 text-white text-3xl font-bold"
              onClick={() => setLightboxIndex(null)}
            >
              ✕
            </button>

            {/* Prev / Next Buttons */}
            <button
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white text-2xl rounded-full px-3 py-2"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              ‹
            </button>
            <button
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white text-2xl rounded-full px-3 py-2"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
