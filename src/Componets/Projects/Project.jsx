import React from "react";
import "./Projects.css";
import pro1 from "../../assets/images/projects/sims.png";
function Projects() {
  return (
    <div className="skill">
      <div className="skill-heder">
        <div className="skill-back">Projects</div>
        <div className="skill-header-motto">
          DON'T LIMIT <span>YOURSELF</span>{" "}
        </div>
      </div>

      <div className="project-container snap-container">
        <div className="project-card">
          <img src={pro1} alt="" />
        </div>
        <div className="project-card">
          <img src={pro1} alt="" />
        </div>
        <div className="project-card">
          <img src={pro1} alt="" />
        </div>
        <div className="project-card">
          <img src={pro1} alt="" />
        </div>
        <div className="project-card">
          <img src={pro1} alt="" />
        </div>
        <div className="project-card">
          <img src={pro1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
