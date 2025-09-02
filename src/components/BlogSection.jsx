import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const blogs = [
  {
    id: 1,
    title: "Explore the Beauty of Bali",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Bali is a living postcard, an Indonesian paradise that feels like a fantasy...",
    fullText:
      "Bali offers countless experiences from serene beaches to majestic temples. A perfect place for travelers who love culture, adventure, and nature.",
  },
  {
    id: 2,
    title: "Discover the Magic of Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "Paris, the city of lights, is known for its romantic atmosphere and cultural heritage...",
    fullText:
      "From the Eiffel Tower to the Louvre, Paris is a dream destination. Walk along the Seine, enjoy French cuisine, and explore historic monuments.",
  },
  {
    id: 3,
    title: "Adventure in the Swiss Alps",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "The Swiss Alps offer skiing, hiking, and breathtaking mountain views...",
    fullText:
      "For adventure lovers, the Swiss Alps are heaven. Ski resorts, hiking trails, and serene villages make it a year-round destination.",
  },
];

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="blog">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-center mb-12 text-blue-800"
          data-aos="fade-up"
        >
          Latest Travel Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-transparent hover:border-blue-500 bg-white"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>

                <div className="flex gap-4">
                  {/* Read More Button */}
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-4 py-2 hover:opacity-90 transition-all"
                  >
                    Read More
                  </button>

                  {/* Visit Blog Button */}
                  <button
                    onClick={() => alert(`Visiting full blog: ${blog.title}`)}
                    className="border border-blue-600 text-blue-600 rounded-xl px-4 py-2 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Visit Blog
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-xl animate-fadeIn"
            data-aos="zoom-in"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            {/* Modal Content */}
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              {selectedBlog.title}
            </h3>
            <p className="text-gray-700">{selectedBlog.fullText}</p>
          </div>
        </div>
      )}
    </section>
  );
}
