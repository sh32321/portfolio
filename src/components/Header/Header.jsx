import React from "react";
import Moon from "../../assets/moon.png";
import "./_header.scss";

const Header = () => {
  return (
    <header>
      <div className="left">
        <div className="title-container">
          <div className="line"></div>
          <div className="title">
            <div className="title-wrapper">
              <div className="title-item">Web Developer</div>
              <div className="title-item">UI Designer</div>
              <div className="title-item">Photographer</div>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="right">
        <img src={Moon} alt="Moon" />
      </div>
    </header>
  );
};

export default Header;
