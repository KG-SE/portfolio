import "./About.css";

import personal from "../../data/personal";
import SectionTitle from "../Common/SectionTitle/SectionTitle";

import {
  FaUserGraduate,
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaMapMarkerAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about section">

      <div className="container">

        <SectionTitle
          subtitle="About Me"
          title="Who I Am"
        />

        <div className="row align-items-center gy-5">

          {/* LEFT */}

          <div className="col-lg-6">

            <div className="about-content">

              <h3>
                Frontend Developer &
                <span> Software Engineer</span>
              </h3>

              <p>
                {personal.bio}
              </p>

              <p>
                I enjoy creating responsive, user-friendly and modern web
                applications using React.js, JavaScript (ES6+), HTML5, CSS3 and
                Bootstrap. My focus is writing clean, maintainable code and
                continuously improving my frontend development skills through
                real-world projects.
              </p>

              <div className="about-info">

                <div className="info-item">

                  <strong>Full Name</strong>

                  <span>{personal.name}</span>

                </div>

                <div className="info-item">

                  <strong>Location</strong>

                  <span>
                    <FaMapMarkerAlt />
                    {personal.city}
                  </span>

                </div>

                <div className="info-item">

                  <strong>Email</strong>

                  <span>{personal.email}</span>

                </div>

                <div className="info-item">

                  <strong>Availability</strong>

                  <span>{personal.availability}</span>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="col-lg-6">

            <div className="about-cards">

              <div className="about-card">

                <FaUserGraduate className="card-icon" />

                <h4>Software Engineering</h4>

                <p>
                  BS Software Engineering graduate with strong fundamentals in
                  software development and frontend technologies.
                </p>

              </div>

              <div className="about-card">

                <FaLaptopCode className="card-icon" />

                <h4>Frontend Development</h4>

                <p>
                  Building responsive, modern and interactive user interfaces
                  using React.js, Bootstrap, HTML5, CSS3 and JavaScript (ES6+).
                </p>

              </div>

              <div className="about-card">

                <FaCode className="card-icon" />

                <h4>Clean Code</h4>

                <p>
                  Writing organized, reusable and maintainable code using
                  component-based architecture and modern JavaScript.
                </p>

              </div>

              <div className="about-card">

                <FaLightbulb className="card-icon" />

                <h4>Continuous Learning</h4>

                <p>
                  Passionate about learning new technologies, improving problem
                  solving skills and building better web applications.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;