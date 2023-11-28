import React from "react";

function SkillCard() {
  return (
    <div className="skill-card">
      <div className="skill-by-icon">
        <div className="skill-counter">01</div>
        <i class="bi bi-code-square"></i>
      </div>
      <div className="skill-title">CUSTOMER STRATEGY</div>
      <div className="skill-text">
        Quisque egestas diam in arcu cursus euismod quis dignissim enim sit amet
        venenatis urna.
      </div>
      <div className="more-about-skill-btn">
        READ MORE <i class="bi bi-plus-lg"></i>
      </div>
    </div>
  );
}

export default SkillCard;
