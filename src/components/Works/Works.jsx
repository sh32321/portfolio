import React from "react";
import "./_works.scss";

const Works = ({ img, link, webPage }) => {
  return (
    <div className="works-container">
      <div className="works">
        <div className="browser">
          <div className="red"></div>
          <div className="grey"></div>
          <div className="green"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="works" className="img" />
        </a>
      </div>
    </div>
  );
};

export default Works;
