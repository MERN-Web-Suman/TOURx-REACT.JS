import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MarketingFeatures from "./components/MarketingFeatures";
import MarketingHighlightSection from "./components/MarketingHighlightSection";
import BusinessServicesSection from "./components/BusinessServicesSection";
import BehindTheStory from "./components/BehindTheStory";
import SponsoredSection from "./components/SponsoredSection";
import FeatureProjects from "./components/FeatureProjects";
import ClientReviews from "./components/ClientReviews";
import LatestNewsSection from "./components/LatestNewsSection";
import BottomSection from "./components/BottomSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <MarketingFeatures />
      <MarketingHighlightSection/>
      <BusinessServicesSection/>
      <BehindTheStory/>
      <SponsoredSection/>
      <FeatureProjects/>
      <ClientReviews/>
      <LatestNewsSection/>
      <BottomSection />
    </div>
  );
}

export default App;
