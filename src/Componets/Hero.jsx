import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero-section">
      <div className="horizontal-line"></div>

      <div className="hero-section-text">
        <p>Dancing in the dark</p>
        <p>passionate</p>
      </div>
      <div className="hero-section-explore">
        <div className="creative">Let's creative</div>
        <div className="or">Or</div>
        <div className="explore">explore now</div>
      </div>

      <div className="hero-footer">
        <p>Let's start</p>
        <ul>
          <li className="active">
            <a href="">PINTEREST </a>
          </li>
          <li>
            <a href=""> BEHANCE </a>
          </li>
          <li>
            <a href="">DRIBBBLE</a>
          </li>
          <li>
            <a href=""> LINKEDIN</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
