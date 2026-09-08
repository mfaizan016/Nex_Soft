import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A modern e-commerce platform designed to provide a smooth shopping experience with product management, secure checkout and responsive design.",
      video:
        "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      number: "02",
      title: "AI Business Assistant",
      category: "Artificial Intelligence",
      description:
        "An intelligent AI assistant designed to automate business tasks, answer customer questions and improve workflow efficiency.",
      video:
        "https://www.w3schools.com/html/movie.mp4",
    },

    {
      number: "03",
      title: "Business Management System",
      category: "Software Solution",
      description:
        "A complete business management solution for managing employees, sales, inventory and daily business operations.",
      video:
        "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      number: "04",
      title: "Mobile Banking App",
      category: "Mobile Application",
      description:
        "A clean and modern mobile banking experience with account management, transactions and financial tracking features.",
      video:
        "https://www.w3schools.com/html/movie.mp4",
    },

    {
      number: "05",
      title: "AI Content Generator",
      category: "Generative AI",
      description:
        "An AI-powered content generation platform that helps businesses create marketing content, social media posts and product descriptions.",
      video:
        "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      number: "06",
      title: "Digital Marketing Dashboard",
      category: "Digital Marketing",
      description:
        "A powerful analytics dashboard for monitoring campaigns, website traffic, customer engagement and marketing performance.",
      video:
        "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  return (
    <main className="projects-page">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="projects-header">

        <Link to="/" className="projects-logo">
          NEX SOFT
        </Link>

        <nav className="projects-nav">

          <Link to="/">
            Home
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/clients">
            Clients
          </Link>

          <Link to="/projects" className="active">
            Projects
          </Link>

          <Link
            to="/contact"
            className="projects-header-btn"
          >
            Get Started
          </Link>

        </nav>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="projects-hero">

        <div className="projects-container">

          <div className="projects-hero-content">

            <span className="projects-eyebrow">
              OUR PROJECTS
            </span>

            <h1>
              Ideas transformed into
              <span> digital experiences.</span>
            </h1>

            <p>
              Explore some of our selected projects where
              technology, creativity and intelligent solutions
              come together to solve real business challenges.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="projects-list-section">

        <div className="projects-container">

          <div className="projects-section-heading">

            <div>

              <span className="projects-small-label">
                SELECTED WORK
              </span>

              <h2>
                Projects that
                <span> make an impact.</span>
              </h2>

            </div>

            <p>
              From web applications and mobile apps to
              artificial intelligence solutions, we build
              digital products focused on performance,
              usability and business growth.
            </p>

          </div>


          {/* =================================================
              PROJECT GRID
          ================================================= */}

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >

                {/* VIDEO */}

                <div className="project-video">

                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  <div className="project-video-overlay">

                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-play">
                      ▶
                    </span>

                  </div>

                </div>


                {/* PROJECT INFORMATION */}

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  <div className="project-link">

                    <span>
                      View Project
                    </span>

                    <span className="project-arrow">
                      ↗
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="projects-cta-section">

        <div className="projects-container">

          <div className="projects-cta">

            <div>

              <span className="projects-small-label">
                HAVE AN IDEA?
              </span>

              <h2>
                Let's turn your idea into
                <span> a real product.</span>
              </h2>

              <p>
                Have a project, business idea or technical
                challenge? Let's discuss how Nex Soft can
                help you build it.
              </p>

            </div>


            <Link
              to="/contact"
              className="projects-cta-button"
            >
              Start a Conversation
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="projects-footer">

        <div className="projects-footer-content">

          <div className="projects-footer-brand">

            <Link to="/" className="projects-logo">
              NEX <span>SOFT</span>
            </Link>

            <p>
              Turning ideas into digital reality.
            </p>

          </div>


          <div className="projects-footer-nav">

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


          <div className="projects-footer-contact">

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


        <div className="projects-footer-bottom">

          © {new Date().getFullYear()} Nex Soft.
          All rights reserved.

        </div>

      </footer>

    </main>
  );
};

export default Projects;