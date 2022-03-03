import React from "react";
import Github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <p>Copyright&copy;2022 Lily.</p>
      {"\n"}
      <p> All rights reserved.</p>
      {"\n"}
      <a href="https://github.com/sh32321" target="_blank" rel="noreferrer">
        <img src={Github} alt="github" className="icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/lily-guo-a3a225180/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin" className="icons" />
      </a>
    </footer>
  );
};

export default Footer;
