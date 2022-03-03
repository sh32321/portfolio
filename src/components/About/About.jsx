import React from "react";
import Logo from "../../assets/logo.png";

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="left-container">
        <div className="line"></div>
        <p className="myself-title">I'm Lily.</p>
        <div className="myself-subcontainer">
          <p className="myself-subtitle">
            Currently live in Vancouver as a Front-End Developer and UI
            Designer. I am keen on designing and building user-friendly
            websites. I've laid a solid foundation in the basic knowledge of
            HTML, CSS, Javascript and React. Moreover, I am a problem-solver and
            good at communicating and working in a team. Ordinarily, I am fond
            of photography. Observing details and aesthetics in our daily life.
            Please drop me a line if you are interested in working with me!
          </p>
        </div>
        <div className="line"></div>
      </div>
      <div className="right-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>
    </section>
  );
};

export default About;
