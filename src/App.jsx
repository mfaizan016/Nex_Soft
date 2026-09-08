import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Services from "./Components/Services";
import Clients from "./Components/Clients";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      {/* Automatically move to top whenever route changes */}
      <ScrollToTop />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />

        {/* Clients */}
        <Route path="/clients" element={<Clients />} />

        {/* Projects */}
        <Route path="/projects" element={<Projects />} />

        {/* Same Contact Page for Get Started,
            Discuss Your Project and Start a Conversation */}
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;