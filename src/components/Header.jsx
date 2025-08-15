
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <header
      className="w-full sticky top-0 z-50"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      {/* Premium gradient background with subtle glass effect */}
      <div className="backdrop-blur-sm bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600/90 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Brand with bounce animation */}
            <div className="flex-shrink-0 flex items-center">
              <a
                href="/"
                className="text-white font-extrabold text-xl sm:text-2xl tracking-tight animate-bounce"
                aria-label="my-profitilo"
                data-aos="zoom-in"
              >
                my-portfolio
              </a>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex space-x-6 items-center">
              <a
                href="/"
                className="text-white/90 hover:text-white font-medium transition-colors"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white/90 hover:text-white font-medium transition-colors"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                About
              </a>
              <a
                href="/blog"
                className="text-white/90 hover:text-white font-medium transition-colors"
                data-aos="fade-left"
                data-aos-delay="250"
              >
                Blog
              </a>
              <a
                href="/services"
                className="text-white/90 hover:text-white font-medium transition-colors"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-white/90 hover:text-white font-medium transition-colors"
                data-aos="fade-left"
                data-aos-delay="350"
              >
                Contact
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setOpen((p) => !p)}
                aria-label="menu"
                className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                <svg
                  className={`h-6 w-6 transform transition-transform ${open ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {open ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-60" : "max-h-0"
          }`}
          aria-hidden={!open}
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a
              href="/"
              className="block text-white/95 font-medium py-2 rounded-md hover:bg-white/10 px-3"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-white/95 font-medium py-2 rounded-md hover:bg-white/10 px-3"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              About
            </a>
            <a
              href="/blog"
              className="block text-white/95 font-medium py-2 rounded-md hover:bg-white/10 px-3"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Blog
            </a>
            <a
              href="/services"
              className="block text-white/95 font-medium py-2 rounded-md hover:bg-white/10 px-3"
              data-aos="fade-down"
              data-aos-delay="250"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block text-white/95 font-medium py-2 rounded-md hover:bg-white/10 px-3"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Decorative thin border that adapts to theme */}
      <div className="h-1 bg-white/5" />
    </header>
  );
}
