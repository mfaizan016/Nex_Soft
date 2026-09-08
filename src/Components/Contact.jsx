import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {

  return (

    <main className="contact-page">


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="contact-header">

        <Link
          to="/"
          className="contact-logo"
        >
          NEX <span>SOFT</span>
        </Link>


        <nav className="contact-nav">

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

          <Link
            to="/get-started"
            className="active"
          >
            Get Started
          </Link>

        </nav>

      </header>



      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-container">

          <span className="contact-eyebrow">
            GET STARTED
          </span>


          <h1>

            Let's build something

            <span>
              remarkable together.
            </span>

          </h1>


          <p>

            Have an idea, project or business challenge?
            Tell us about it and let's discuss how Nex Soft
            can help you turn it into a powerful digital solution.

          </p>

        </div>

      </section>



      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="contact-section">

        <div className="contact-container contact-grid">


          {/* LEFT SIDE */}

          <div className="contact-info">

            <span className="contact-small-label">
              START YOUR PROJECT
            </span>


            <h2>

              Tell us about

              <span>
                your project.
              </span>

            </h2>


            <p>

              Whether you need a website, mobile application,
              AI solution or custom software, we're ready to
              hear your idea.

            </p>



            {/* CONTACT DETAILS */}

            <div className="contact-details">


              <div className="contact-detail">

                <span>
                  EMAIL
                </span>

                <a href="mailto:nexsoft2026@gmail.com">
                  nexsoft2026@gmail.com
                </a>

              </div>



              <div className="contact-detail">

                <span>
                  WHATSAPP
                </span>

                <a
                  href="https://wa.me/923316859677"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +92 331 6859677
                </a>

              </div>


            </div>

          </div>



          {/* =================================================
              FORM
          ================================================= */}

          <div className="contact-form-box">

            <form>


              {/* NAME */}

              <div className="form-group">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />

              </div>



              {/* EMAIL */}

              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>



              {/* SERVICE */}

              <div className="form-group">

                <label>
                  Service
                </label>

                <select>

                  <option value="">
                    Select a service
                  </option>

                  <option>
                    Web Applications
                  </option>

                  <option>
                    Mobile Applications
                  </option>

                  <option>
                    Agentic AI
                  </option>

                  <option>
                    Generative AI
                  </option>

                  <option>
                    Custom Software
                  </option>

                </select>

              </div>



              {/* MESSAGE */}

              <div className="form-group">

                <label>
                  Tell us about your project
                </label>

                <textarea
                  rows="6"
                  placeholder="Describe your project or idea..."
                ></textarea>

              </div>



              {/* BUTTON */}

              <button
                type="submit"
                className="contact-submit"
              >

                Send Message

                <span>
                  ↗
                </span>

              </button>


            </form>

          </div>

        </div>

      </section>



      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="contact-footer">

        <div className="contact-footer-content">


          {/* BRAND */}

          <div className="contact-footer-brand">

            <Link
              to="/"
              className="contact-logo"
            >
              NEX <span>SOFT</span>
            </Link>

            <p>
              Turning ideas into digital reality.
            </p>

          </div>



          {/* EXPLORE */}

          <div className="contact-footer-nav">

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

          <div className="contact-footer-contact">

            <h3>
              Get Started
            </h3>

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



        {/* COPYRIGHT */}

        <div className="contact-footer-bottom">

          © {new Date().getFullYear()} Nex Soft.
          All rights reserved.

        </div>

      </footer>

    </main>

  );
};

export default Contact;