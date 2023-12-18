import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">IX</div>
      <div className="links">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
