import React, { useState } from "react";
import Crosshair from "./components/Crosshair.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ServiceStrip from "./components/ServiceStrip.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Toolkit from "./components/Toolkit.jsx";
import Blogs from "./components/Blogs.jsx";
import Service from "./components/Service.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bp-root">
      <Crosshair />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <ServiceStrip />
      <About />
      <Work />
      <Toolkit />
      <Blogs />
      <Service />
      <Contact />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
