

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Packages from "./components/Packages";
import { Toaster } from "react-hot-toast";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Sponsors from "./components/Sponsors";
import FeatureProjects from "./components/FeatureProjects";
import BlogSection from "./components/BlogSection";
import NewsletterSubscription from "./components/NewsletterSubscription";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
         <Packages />
         <WhyChooseUs />
         <Testimonials/>
         <Sponsors/>
         <FeatureProjects/>
         <BlogSection/>
         <NewsletterSubscription/>
         <ContactSection/>
         <Footer/>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
