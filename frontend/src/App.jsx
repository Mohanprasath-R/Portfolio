import React from "react";
import Home from "./pages/Home";
import NavigationBar from "./components/navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
    );
}

export default App;
