import React, { useState } from "react";
import "./Hero.css";
function Hero({ explore }) {
  return (
    <div className="hero-section">
      <div className="horizontal-line"></div>

      <div className="hero-section-text">
        <p>Code Your Dreams, Shape Your Future</p>
        <p>passionate</p>
      </div>
      <div className="hero-section-explore">
        <a
          href="#"
          className="creative"
          onClick={() => {
            explore();
            window.scroll(1000, 0);
          }}
        >
          Let's creative
        </a>
        <div className="or">Or</div>
        <a
          href="#explore"
          className="explore"
          onClick={() => {
            explore();
            window.scroll(1000, 0);
          }}
        >
          explore now
        </a>
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
