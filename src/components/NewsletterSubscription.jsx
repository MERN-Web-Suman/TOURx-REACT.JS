import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const NewsletterSubscription = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
  };

  return (
    <section className="relative overflow-hidden">
      {/* Moving Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x opacity-90"></div>

      {/* SVG Wave */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          fillOpacity="0.2"
          d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,197.3C672,213,768,203,864,192C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto text-center py-24 px-4 sm:px-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white/90 mb-8 text-lg">
          Get the latest travel deals, tips, and guides straight to your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full sm:w-80 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition-all duration-300"
          />
          <button
            type="submit"
            className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-white/80 text-sm">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>

      {/* Extra floating decorative circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
};

export default NewsletterSubscription;
