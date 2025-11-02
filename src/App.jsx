import Experience from "./components/Experience";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import FeatureCard from "./section/FeatureCard";
import Hero from "./section/Hero";
import Showcase from "./section/Showcase";
import { useRef } from "react";
import TechStack from "./section/TechStack";
import Testimonials from "./section/Testimonials";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

const App = () => {
  const canvasRef = useRef(null);

  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      {/* <Logo/> */}
      <FeatureCard/>
      <Experience/>
      <TechStack/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
