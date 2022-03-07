import React from "react";
import Works from "./Works";
import { works } from "../../data";
import "./_worksList.scss";

const WorksList = () => {
  return (
    <>
      <div className="works-title-container" id="works">
        <div className="line"></div>
        <p className="works-title">Works</p>
        <div className="line"></div>
      </div>
      <div className="works-container">
        {works.map((item) => (
          <>
            <div className="works-subcontainer">
              <Works img={item.img} link={item.link} key={item.id} />
              <div className="btn-container">
                <a
                  href={item.git}
                  className="works-links"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={item.link}
                  className="works-links"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
              <div className="desc-container">
                <p>{item.desc}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default WorksList;
