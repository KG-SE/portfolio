import "./Hero.css";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import personal from "../../data/personal";
import Button from "../Common/Button/Button";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";


const Hero = () => {

  const typedRef = useRef(null);

useEffect(() => {

    const typed = new Typed(typedRef.current, {

        strings: personal.roles,

        typeSpeed: 70,

        backSpeed: 40,

        backDelay: 1500,

        loop: true,

        showCursor: true,

        cursorChar: "|",

    });

    return () => {

        typed.destroy();

    };

}, []);

  return (

    <section
      id="home"
      className="hero"
    >

      <div className="hero-glow hero-glow-one"></div>

      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-grid"></div>

      <div className="container">

        <div className="hero-wrapper">

          {/* LEFT */}

          <div className="hero-left">

            <span className="hero-badge">

              👋 Welcome to my Portfolio

            </span>

            <h1>

              Hi, I'm

              <span>

                {personal.name}

              </span>

            </h1>

            <h2 className="typed-text">

    <span ref={typedRef}></span>

</h2>

            <p>

              {personal.bio}

            </p>

            <div className="hero-buttons">

              <Button
                text="Download Resume"
                href={personal.resume}
                variant="primary"
                download
              />

              <Button
                text="View Projects"
                href="#projects"
                variant="secondary"
              />

            </div>

            <div className="hero-social">

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

          {/* RIGHT */}

          <div className="hero-right">

            <div className="hero-image-card">

              <img
                src={personal.image}
                alt={personal.name}
              />

              
            </div>

            

            <div className="stats-wrapper">

              {

                personal.stats.map((item) => (

                  <div
                    key={item.label}
                    className="stat-card"
                  >

                    <h3>

                      {item.value}

                    </h3>

                    <span>

                      {item.label}

                    </span>

                  </div>

                ))

              }

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default Hero;