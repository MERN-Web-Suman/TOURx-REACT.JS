import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ClientsSection from "./components/ClientsSection.jsx";
import MySkillPage from "./components/MySkillPage.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import MyResume from "./components/MyResume.jsx";
import ClientFeedback from "./components/ClientFeedback.jsx";
import Achievements from "./components/Achievements.jsx";
import ServicesPricing from "./components/ServicesPricing.jsx";
import ContactPage from "./components/ContactPage.jsx";
import Awards from "./components/Awards.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <ClientsSection></ClientsSection>
      <MySkillPage/>
      <ProjectsPage/>
      <MyResume/>
      <ClientFeedback/>
      <Achievements/>
      <Awards/>
      <ServicesPricing />
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
