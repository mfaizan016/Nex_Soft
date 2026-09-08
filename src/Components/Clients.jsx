import React from "react";
import { Link } from "react-router-dom";
import "./Clients.css";

const Clients = () => {
  const clients = [
    {
      number: "01",
      logo: "A",
      name: "Alpha Solutions",
      category: "Business Solutions",
      description:
        "Digital solutions designed to improve business operations and customer experience.",
    },
    {
      number: "02",
      logo: "T",
      name: "TechVision",
      category: "Technology",
      description:
        "Scalable technology platforms built with modern software architecture.",
    },
    {
      number: "03",
      logo: "M",
      name: "MarketPro",
      category: "Digital Marketing",
      description:
        "Data-driven digital marketing solutions focused on increasing online visibility and growth.",
    },
    {
      number: "04",
      logo: "E",
      name: "Elite Commerce",
      category: "E-Commerce",
      description:
        "High-performance e-commerce platforms providing seamless shopping experiences.",
    },
    {
      number: "05",
      logo: "F",
      name: "Future Labs",
      category: "AI & Automation",
      description:
        "AI-powered automation solutions designed to optimize complex business workflows.",
    },
    {
      number: "06",
      logo: "N",
      name: "Nova Systems",
      category: "Software Solutions",
      description:
        "Custom software solutions developed to support business growth and operational efficiency.",
    },
  ];

  return (
    <main className="clients-page">

    

{/* =====================================================
    NAVIGATION
===================================================== */}

<header className="clients-header">

  <Link to="/" className="clients-logo">
    NEX <span>SOFT</span>
  </Link>

  <nav className="clients-nav">

    <Link to="/">
      Home
    </Link>

    <Link to="/services">
      Services
    </Link>

    <Link to="/clients" className="active">
      Clients
    </Link>

    {/* PROJECTS */}
    <Link to="/projects">
      Projects
    </Link>

    <Link
      to="/contact"
      className="clients-header-btn"
    >
      Get Started
    </Link>

  </nav>

</header>

    


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="clients-hero">

        <div className="clients-container">

          <div className="clients-hero-content">

            <span className="clients-eyebrow">
              OUR CLIENTS
            </span>

            <h1>
              Trusted by businesses
              <span> that think big.</span>
            </h1>

            <p>
              Our Journey <br />
              We work with startups, growing businesses and
              organizations to transform ambitious ideas into
              powerful digital solutions.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="clients-stats-section">

        <div className="clients-container">

          <div className="clients-stats">

            <div className="client-stat">
              <h2>50+</h2>
              <p>Projects Delivered</p>
            </div>

            <div className="client-stat">
              <h2>30+</h2>
              <p>Clients</p>
            </div>

            <div className="client-stat">
              <h2>10+</h2>
              <p>Industries Served</p>
            </div>

            <div className="client-stat">
              <h2>100%</h2>
              <p>Commitment</p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CLIENTS
      ===================================================== */}

      <section className="clients-list-section">

        <div className="clients-container">

          <div className="clients-section-heading">

            <div>

              <span className="clients-small-label">
                SELECTED CLIENTS
              </span>

              <h2>
                Partnerships that
                <span> create impact.</span>
              </h2>

            </div>

            <p>
              We collaborate closely with our clients to
              understand their challenges and build solutions
              that deliver meaningful results.
            </p>

          </div>


          <div className="clients-grid">

            {clients.map((client) => (

              <article
                className="client-card"
                key={client.number}
              >

                <div className="client-card-top">

                  <span className="client-number">
                    {client.number}
                  </span>

                  <span className="client-arrow">
                    ↗
                  </span>

                </div>


                <div className="client-card-body">

                  <div className="client-logo">
                    {client.logo}
                  </div>

                  <span className="client-category">
                    {client.category}
                  </span>

                  <h3>
                    {client.name}
                  </h3>

                  <p>
                    {client.description}
                  </p>

                </div>


                <div className="client-card-line"></div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="clients-cta-section">

        <div className="clients-container">

          <div className="clients-cta">

            <div>

              <span className="clients-small-label">
                READY TO WORK WITH US?
              </span>

              <h2>
                Become our
                <span> next success story.</span>
              </h2>

              <p>
                Have an idea, challenge or project in mind?
                Let's work together to turn it into something
                valuable.
              </p>

            </div>


            <a
              href="https://wa.me/923316859677"
              target="_blank"
              rel="noopener noreferrer"
              className="client-cta-button"
            >
              Start a Conversation
              <span>↗</span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="clients-footer">

        <div className="clients-footer-content">

          <div className="clients-footer-brand">

            <Link to="/" className="clients-logo">
              NEX <span>SOFT</span>
            </Link>

            <p>
              Turning ideas into digital reality.
            </p>

          </div>


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

            
<Link to="/projects">Projects</Link>

          </div>


          <div className="clients-footer-contact">

            <h3>
              Contact
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


        <div className="clients-footer-bottom">

          © {new Date().getFullYear()} Nex Soft.
          All rights reserved.

        </div>

      </footer>

    </main>
  );
};

export default Clients;
