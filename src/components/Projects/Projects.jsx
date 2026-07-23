import "./Projects.css";

import projects from "../../data/projects";
import SectionTitle from "../Common/SectionTitle/SectionTitle";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Projects = () => {

  return (

    <section
      id="projects"
      className="projects section"
    >

      <div className="container">

        <SectionTitle
          subtitle="My Projects"
          title="Featured Work"
        />

        <div className="row g-4">

          {

            projects.map((project) => (

              <div
                className="col-lg-6"
                key={project.id}
              >

                <div className="project-card">

                  {/* Image */}

                  <div className="project-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                  </div>

                  {/* Content */}

                  <div className="project-content">

                    <h3>

                      {project.title}

                    </h3>

                    <p>

                      {project.description}

                    </p>

                    {/* Technologies */}

                    <div className="project-tech">

                      {

                        project.technologies.map((tech) => (

                          <span
                            key={tech}
                            className="tech-badge"
                          >

                            {tech}

                          </span>

                        ))

                      }

                    </div>

                    {/* Buttons */}

                    <div className="project-buttons">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn github-btn"
                      >

                        <FaGithub />

                        View Code

                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn live-btn"
                      >

                        <FaExternalLinkAlt />

                        Live Demo

                      </a>

                    </div>

                  </div>

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

};

export default Projects;