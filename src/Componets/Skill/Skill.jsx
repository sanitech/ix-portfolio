import React from "react";
import "./Skill.css";
import SkillCard from "./SkillCard";
function Skill() {
  return (
    <div className="skill">
      <div className="skill-heder">
        <div className="skill-back">Skill</div>
        <div className="skill-header-motto">
          DON'T LIMIT <span>YOURSELF</span>{" "}
        </div>
      </div>

      <div className="skill-container">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
}

export default Skill;
