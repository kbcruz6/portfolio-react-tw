import React, { useContext } from "react";

//! COMPONENTS
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import SocialMediaBottom from "./components/SocialMediaBottom.jsx";
import ParticlesBackground from "./components/ParticlesBackground.jsx";

//! CONTEXT
import { ThemeContext } from "./context/ThemeContext";

//! AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  setTimeout(() => {
    AOS.refresh();
  }, 500);

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={isDarkTheme ? "dark" : ""}>
      <div className={isDarkTheme ? "" : "hidden"}>
        <ParticlesBackground />
      </div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <SocialMediaBottom />
    </div>
  );
}

export default App;
