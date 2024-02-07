import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Features";
import Gallery from "./components/Gallery";
// import ContactForm from "./components/ContactForm";
import Tours from "./components/Tours";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Tours />
      {/* <ContactForm /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
