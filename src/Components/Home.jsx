import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ====================================================
          HEADER
          ==================================================== */}

      <header className="home-header">

        <div className="logo">
          NEX <span>SOFT</span>
        </div>

        <nav className="home-nav">

          <Link to="/services">
            Services
          </Link>

          <Link to="/clients">
            Clients
          </Link>

          <Link to="/projects">
            Projects
          </Link>

          <Link
            to="/contact"
            className="header-btn"
          >
            Get Started
          </Link>

        </nav>

      </header>


      {/* ====================================================
          HERO SECTION
          ==================================================== */}

      <main
        className="hero-section"
        id="home"
      >

        <div className="hero-copy">

          <span className="eyebrow">
            Nex Soft
          </span>

          <h1>
            We Build{" "}
            <span>
              Digital Experiences
            </span>{" "}
            That Grow Businesses.
          </h1>

          <p>
            Nex Soft helps businesses transform ideas into powerful
            digital products through modern software development,
            creative design, AI solutions and digital services.
          </p>


          {/* STATS */}

          <div className="stats">

            <div>
              <h3>
                50+
              </h3>

              <p>
                Projects
              </p>
            </div>


            <div>
              <h3>
                30+
              </h3>

              <p>
                Happy Clients
              </p>
            </div>


            <div>
              <h3>
                10+
              </h3>

              <p>
                Services
              </p>
            </div>

          </div>

        </div>

      </main>


      {/* ====================================================
          OUR VISION
          ==================================================== */}

      <section
        className="vision-section"
        id="vision"
      >

        <div className="vision-container">

          <span className="vision-eyebrow">
            OUR VISION
          </span>

          <h2>
            Building a{" "}
            <span>
              Smarter Digital Future.
            </span>
          </h2>

          <p>
            Our vision is to become a trusted technology partner
            for businesses by creating innovative, intelligent and
            reliable digital solutions. At Nex Soft, we aim to
            combine creativity, modern technology and artificial
            intelligence to turn ideas into meaningful digital
            experiences that help businesses grow, compete and
            succeed in a rapidly changing world.
          </p>

        </div>

      </section>


      {/* ====================================================
          CLIENTS SECTION
          ==================================================== */}

      <section
        className="clients-section"
        id="clients"
      >

        <div className="section-title-wrap">
        </div>

      </section>


      {/* ====================================================
          SERVICES CTA
          ==================================================== */}

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
                  {" "}remarkable.
                </span>
              </h2>

              <p>
                Tell us about your idea, challenge or business
                requirement. We'll help you find the right
                technology and approach.
              </p>

            </div>


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


      {/* ====================================================
          FOOTER
          ==================================================== */}

      <footer className="clients-footer">

        <div className="clients-footer-content">


          {/* FOOTER BRAND */}

          <div className="clients-footer-brand">

            <Link
              to="/"
              className="clients-logo"
            >
              NEX <span>SOFT</span>
            </Link>

            <p>
              Turning ideas into digital reality.
            </p>

          </div>


          {/* FOOTER NAVIGATION */}

          <div className="clients-footer-nav">

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


          {/* FOOTER CONTACT */}

          <div className="clients-footer-contact">

            <h3>
              Get Started
            </h3>

            <a href="mailto:nexsoft2026@gmail.com">
              nexsoft2026@gmail.com
            </a>

            <a
              href="https://wa.me/923316859677"
              target="_blank"
              rel="noreferrer"
            >
              +92 331 6859677
            </a>

          </div>

        </div>


        {/* FOOTER BOTTOM */}

        <div className="clients-footer-bottom">

          © {new Date().getFullYear()} Nex Soft.
          All rights reserved.

        </div>

      </footer>

    </div>
  );
}

export default Home;