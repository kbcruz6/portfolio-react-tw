import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import SocialMediaBottom from "./components/SocialMediaBottom.jsx";
import ParticlesBackground from "./components/ParticlesBackground.jsx";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
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
