import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2> <br></br>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Naresh" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                6 Months  <br /> in a Multinational Company as Project Associate in Operations.
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
              BSc in Computer Science & Engineering from American International University-Bangladesh
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                3+ Completed
                <br />
                Projects
              </small>
            </article>
          </div>
          <p>
          I am a graduate software engineer possessing a formidable foundation in software development and an unwavering zeal for crafting top-notch applications. My expertise lies in full-stack development, with a particular emphasis on back-end development employing Laravel and front-end ReactJs. 
          </p>
          <p>
            In recent years, I've worked in the Multinational Company named Quantanite. I have worked there as a Project Associate with the American DoorDash company.
          </p>
          <p>
            After a career in there at present, I am looking for opportunities in the FrontEnd world to give back to society. I am perpetually enthusiastic to acquire novel technological skills and eagerly welcome fresh opportunities to surmount new challenges!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
