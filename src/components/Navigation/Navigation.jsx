import React from "react";
import "./_navigation.scss";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className="nav-container">
      <Link to="about" spy={true} smooth={true}>
        <button className="nav-btn">About</button>
      </Link>
      <Link to="contact" spy={true} smooth={true}>
        <button className="nav-btn">Contact</button>
      </Link>
      <Link to="works" spy={true} smooth={true}>
        <button className="nav-btn">Works</button>
      </Link>

      <button className="nav-btn">
        <a
          href="https://drive.google.com/file/d/1WYpCsCPRAUrIYjVbF-gfnPnrlRi0Jcpt/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="resume"
        >
          Resume
        </a>
      </button>
    </div>
  );
};

export default Navigation;
