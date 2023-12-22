import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <a href="">Home</a>
          </li>
          <li>
            <a href="#explore">Service</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
      </div>

      <div className="order">make order</div>
    </nav>
  );
}

export default Navbar;
