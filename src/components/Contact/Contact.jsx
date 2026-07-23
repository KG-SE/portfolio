import "./Contact.css";

import personal from "../../data/personal";
import SectionTitle from "../Common/SectionTitle/SectionTitle";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact section">

      <div className="container">

        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Work Together"
        />

        <p className="contact-description">
          I'm always interested in new opportunities, frontend development
          projects, and collaborations. Feel free to contact me through any
          of the platforms below.
        </p>

        <div className="row g-4">

          <div className="col-md-6 col-lg-3">

            <a
              href={`mailto:${personal.email}`}
              className="contact-card"
            >
              <FaEnvelope className="contact-icon" />

              <h4>Email</h4>

              <span>{personal.email}</span>

            </a>

          </div>

          <div className="col-md-6 col-lg-3">

            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaGithub className="contact-icon" />

              <h4>GitHub</h4>

              <span>View Repositories</span>

            </a>

          </div>

          <div className="col-md-6 col-lg-3">

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaLinkedin className="contact-icon" />

              <h4>LinkedIn</h4>

              <span>Connect With Me</span>

            </a>

          </div>

          <div className="col-md-6 col-lg-3">

            <div className="contact-card">

              <FaMapMarkerAlt className="contact-icon" />

              <h4>Location</h4>

              <span>{personal.city}</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;