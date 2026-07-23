import "./Skills.css";

import skills from "../../data/skills";
import SectionTitle from "../Common/SectionTitle/SectionTitle";

import {
  FaCode,
  FaTools,
  FaUsers,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="skills section">

      <div className="container">

        <SectionTitle
          subtitle="My Skills"
          title="Technical Expertise"
        />

        <div className="row g-4">

          {/* Technical Skills */}

          <div className="col-lg-4">

            <div className="skills-card">

              <div className="skills-header">

                <FaCode className="skills-icon" />

                <h3>Technical Skills</h3>

              </div>

              <div className="skills-list">

                {skills.technical.map((skill) => (

                  <span
                    key={skill}
                    className="skill-badge"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* Tools */}

          <div className="col-lg-4">

            <div className="skills-card">

              <div className="skills-header">

                <FaTools className="skills-icon" />

                <h3>Tools</h3>

              </div>

              <div className="skills-list">

                {skills.tools.map((tool) => (

                  <span
                    key={tool}
                    className="skill-badge"
                  >
                    {tool}
                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* Soft Skills */}

          <div className="col-lg-4">

            <div className="skills-card">

              <div className="skills-header">

                <FaUsers className="skills-icon" />

                <h3>Soft Skills</h3>

              </div>

              <div className="skills-list">

                {skills.softSkills.map((skill) => (

                  <span
                    key={skill}
                    className="skill-badge"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;