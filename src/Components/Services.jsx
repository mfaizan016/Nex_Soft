
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      icon: "⌘",
      title: "Web Applications",
      description:
        "We design and develop fast, secure and scalable web applications that solve real business problems and deliver exceptional digital experiences.",
      features: [
        "Custom Web Applications",
        "Business Management Systems",
        "E-Commerce Platforms",
        "SaaS Applications",
      ],
    },

    {
      number: "02",
      icon: "◫",
      title: "Mobile Applications",
      description:
        "We build modern mobile applications that combine intuitive design, reliable performance and seamless experiences across smartphones and tablets.",
      features: [
        "Android Applications",
        "iOS Applications",
        "Cross-Platform Apps",
        "Business Mobile Solutions",
      ],
    },

    {
      number: "03",
      icon: "✦",
      title: "Agentic AI",
      description:
        "We create intelligent AI agents capable of understanding tasks, making decisions and executing workflows to automate complex business operations.",
      features: [
        "AI Agents",
        "AI Chatbots",
        "Business Automation",
        "Intelligent Workflows",
      ],
    },

    {
      number: "04",
      icon: "✧",
      title: "Generative AI",
      description:
        "We integrate generative AI into products and business processes to create intelligent experiences, automate content and unlock new possibilities.",
      features: [
        "AI-Powered Applications",
        "LLM Integration",
        "AI Content Generation",
        "Custom AI Solutions",
      ],
    },
  ];

  return (
    <main className="services-page">

      {/* =====================================================
          HEADER / NAVIGATION
      ===================================================== */}

      <header className="services-header">

        <Link to="/" className="services-logo">
          NEX <span>SOFT</span>
        </Link>

        <nav className="services-nav">

          <Link to="/">
            Home
          </Link>

          <Link
            to="/services"
            className="active"
          >
            Services
          </Link>

          <Link to="/clients">
            Clients
          </Link>

          <Link to="/projects">
            Projects
          </Link>

          {/* GET STARTED */}

          <Link
            to="/contact"
            className="services-header-btn"
          >
            Get Started
          </Link>

        </nav>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-hero">

        <div className="services-container">

          <div className="services-hero-content">

            <span className="services-eyebrow">
              OUR SERVICES
            </span>

            <h1>
              Technology that
              <span>
                moves your business forward.
              </span>
            </h1>

            <p>
              We build digital products and intelligent solutions
              that help businesses operate better, serve customers
              faster and grow with confidence.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES LIST
      ===================================================== */}

      <section className="services-list-section">

        <div className="services-container">

          {/* SECTION INTRO */}

          <div className="services-section-intro">

            <div>

              <span className="services-small-label">
                WHAT WE DO
              </span>

              <h2>
                Our core
                <span>
                  capabilities.
                </span>
              </h2>

            </div>

            <p>
              From custom software to advanced artificial
              intelligence, our services are designed to turn
              ambitious ideas into reliable digital products.
            </p>

          </div>


          {/* =================================================
              SERVICES GRID
          ================================================= */}

          <div className="services-grid">

            {services.map((service) => (

              <article
                className="service-card"
                key={service.number}
              >

                {/* CARD HEADER */}

                <div className="service-card-header">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-icon">
                    {service.icon}
                  </span>

                </div>


                {/* CARD CONTENT */}

                <div className="service-card-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <ul>

                    {service.features.map((feature) => (

                      <li key={feature}>

                        <span>
                          +
                        </span>

                        {feature}

                      </li>

                    ))}

                  </ul>

                </div>


                {/* =================================================
                    DISCUSS YOUR PROJECT
                ================================================= */}

                <Link
                  to="/contact"
                  className="service-card-link"
                >

                  <span>
                    Discuss your project
                  </span>

                  <span className="service-link-arrow">
                    ↗
                  </span>

                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="services-cta">

        <div className="services-container">

          <div className="services-cta-box">

            <div>

              <span className="services-small-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's build something
                <span>
                  remarkable.
                </span>
              </h2>

              <p>
                Tell us about your idea, challenge or business
                requirement. We'll help you find the right
                technology and approach.
              </p>

            </div>


            {/* START A CONVERSATION */}

            <Link
              to="/contact"
              className="services-cta-button"
            >

              Start a Conversation

              <span>
                ↗
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="services-footer">

        <div className="services-footer-content">

          {/* BRAND */}

          <div className="services-footer-brand">

            <Link
              to="/"
              className="services-logo"
            >
              NEX <span>SOFT</span>
            </Link>

            <p>
              Turning ideas into digital reality.
            </p>

          </div>


          {/* NAVIGATION */}

          <div className="services-footer-nav">

            <h3>
              Explore
            </h3>

            <Link to="/">
              Home
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/clients">
              Clients
            </Link>

            <Link to="/projects">
              Projects
            </Link>

          </div>


          {/* CONTACT */}

          <div className="services-footer-contact">

            <h3>
              Contact
            </h3>

            {/* SAME CONTACT PAGE */}

            <Link to="/contact">
              Get Started
            </Link>

            <a href="mailto:nexsoft2026@gmail.com">
              nexsoft2026@gmail.com
            </a>

            <a
              href="https://wa.me/923316859677"
              target="_blank"
              rel="noopener noreferrer"
            >
              +92 331 6859677
            </a>

          </div>

        </div>


        {/* FOOTER BOTTOM */}

        <div className="services-footer-bottom">

          © {new Date().getFullYear()} Nex Soft.
          All rights reserved.

        </div>

      </footer>

    </main>
  );
}

export default Services;
