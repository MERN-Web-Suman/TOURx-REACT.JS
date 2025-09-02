import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Simple validation
    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Simulate success
    toast.success("Message sent successfully! ✅");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-16 relative">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Give your Feedback
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Google Map */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg" data-aos="fade-right">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0190178940527!2d-122.41941548468264!3d37.77492927975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5b6c3fdf%3A0x35db7d0d8e5c3a0!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1688435689987!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form className="bg-white text-gray-800 p-8 rounded-lg shadow-xl" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Get In Touch</h3>

              <div className="mb-4">
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-purple-600 hover:scale-105 transition transform duration-300"
              >
                Send Message
              </button>

              {/* Social Icons */}
              <div className="flex justify-center mt-6 space-x-4">
                <a
                  href="/"
                  className="bg-indigo-600 p-3 rounded-full hover:bg-pink-500 transition transform hover:scale-110"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="/"
                  className="bg-indigo-600 p-3 rounded-full hover:bg-pink-500 transition transform hover:scale-110"
                >
                  <FaInstagram />
                </a>
                <a
                  href="/"
                  className="bg-indigo-600 p-3 rounded-full hover:bg-pink-500 transition transform hover:scale-110"
                >
                  <FaTwitter />
                </a>
                <a
                  href="/"
                  className="bg-indigo-600 p-3 rounded-full hover:bg-pink-500 transition transform hover:scale-110"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
