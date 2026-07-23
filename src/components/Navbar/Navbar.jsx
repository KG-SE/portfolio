import personal from "../../data/personal";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Education",
        "Courses",
        "Contact"
    ];

    return (

        <header className="header">

            <div className="container">

                <nav className="navbar">

                    {/* Logo */}

                    <a href="#home" className="logo">

                        {"<"}KG{" />"}

                    </a>

                    {/* Desktop Menu */}

                    <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                        {
                            navLinks.map((link) => (

                                <li key={link}>

                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link}
                                    </a>

                                </li>

                            ))
                        }

                        <li>

                            <a
                                href={personal.resume}
                                target="_blank"
                                rel="noreferrer"
                                className="resume-btn"
                                onClick={() => setMenuOpen(false)}
                            >
                                Resume
                            </a>

                        </li>

                    </ul>

                    {/* Mobile Icon */}

                    <div
                        className="menu-icon"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >

                        {

                            menuOpen ?

                                <FaTimes />

                                :

                                <FaBars />

                        }

                    </div>

                </nav>

            </div>

        </header>

    );

};

export default Navbar;