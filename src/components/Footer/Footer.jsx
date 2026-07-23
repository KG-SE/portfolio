import "./Footer.css";

import personal from "../../data/personal";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowUp,
} from "react-icons/fa";

const Footer = () => {

    const year = new Date().getFullYear();

    return (

        <footer className="footer">

            <div className="container">

                <div className="footer-content">

                    {/* Left */}

                    <div className="footer-brand">

                        <a
                            href="#home"
                            className="footer-logo"
                        >

                            {"<"}KG{" />"}

                        </a>

                        <p>

                            Frontend Developer passionate about building
                            modern, responsive and user-friendly web
                            applications using React.js and JavaScript (ES6+).

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div className="footer-links">

                        <h4>Quick Links</h4>

                        <a href="#home">Home</a>

                        <a href="#about">About</a>

                        <a href="#skills">Skills</a>

                        <a href="#projects">Projects</a>

                        <a href="#education">Education</a>

                        <a href="#courses">Courses</a>

                        <a href="#contact">Contact</a>

                    </div>

                    {/* Social */}

                    <div className="footer-social">

                        <h4>Connect</h4>

                        <div className="social-icons">

                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noreferrer"
                            >

                                <FaGithub />

                            </a>

                            <a
                                href={personal.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >

                                <FaLinkedin />

                            </a>

                            <a
                                href={`mailto:${personal.email}`}
                            >

                                <FaEnvelope />

                            </a>

                        </div>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>

                        © {year} {personal.name}. All Rights Reserved.

                    </p>

                    <a
                        href="#home"
                        className="back-to-top"
                    >

                        <FaArrowUp />

                    </a>

                </div>

            </div>

        </footer>

    );

};

export default Footer;