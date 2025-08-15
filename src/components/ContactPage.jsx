
// ContactPage.jsx
import React from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaPhoneAlt } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

const ContactPage = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1200 , once:false});
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      <div
        data-aos="zoom-in"
        className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-2xl w-full"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-2">
          Contact Me
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Let's work together! Fill out the form and I'll get back to you soon.
        </p>

        <form className="space-y-6">
          {/* Name Field */}
          <div className="flex items-center bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-all duration-300">
            <FaUser className="text-white mr-3" />
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent w-full text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-all duration-300">
            <FaEnvelope className="text-white mr-3" />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent w-full text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          {/* Phone Field */}
          <div className="flex items-center bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-all duration-300">
            <FaPhoneAlt className="text-white mr-3" />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="bg-transparent w-full text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          {/* Message Field */}
          <div className="flex items-start bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-all duration-300">
            <FaCommentDots className="text-white mt-2 mr-3" />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="bg-transparent w-full text-white placeholder-gray-300 focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            data-aos="fade-up"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
