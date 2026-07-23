import "./Courses.css";

import courses from "../../data/courses";
import SectionTitle from "../Common/SectionTitle/SectionTitle";

import {
    FaCertificate,
    FaCalendarAlt,
    FaMapMarkerAlt
} from "react-icons/fa";

const Courses = () => {

    return (

        <section
            id="courses"
            className="courses section"
        >

            <div className="container">

                <SectionTitle
                    subtitle="Courses"
                    title="Professional Certifications"
                />

                <div className="row g-4">

                    {

                        courses.map((course) => (

                            <div
                                className="col-lg-6"
                                key={course.id}
                            >

                                <div className="course-card">

                                    <div className="course-icon">

                                        <FaCertificate />

                                    </div>

                                    <h3>

                                        {course.title}

                                    </h3>

                                    <h4>

                                        {course.institute}

                                    </h4>

                                    <div className="course-meta">

                                        <span>

                                            <FaCalendarAlt />

                                            {course.duration}

                                        </span>

                                        <span>

                                            <FaMapMarkerAlt />

                                            {course.location}

                                        </span>

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

export default Courses;