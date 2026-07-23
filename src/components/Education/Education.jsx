import "./Education.css";

import education from "../../data/education";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="education section">

      <div className="container">

        <SectionTitle
          subtitle="Education"
          title="Academic Journey"
        />

        <div className="education-wrapper">

          {education.map((item) => (

            <div
              key={item.id}
              className="education-card"
            >

              <div className="education-icon">

                <FaGraduationCap />

              </div>

              <div className="education-content">

                <h3>{item.degree}</h3>

                <h4>{item.institute}</h4>

                <div className="education-meta">

                  <span>

                    <FaCalendarAlt />

                    {item.duration}

                  </span>

                  <span>

                    <FaMapMarkerAlt />

                    {item.location}

                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Education;