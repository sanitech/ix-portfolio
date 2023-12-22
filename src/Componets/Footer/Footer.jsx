import React from "react";
import logo from "../../assets/images/black logo.png";

import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div class="footer-content footer">
        <div className="about-ix">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="about-ix-moot">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            earum nesciunt accusantium repellendus nostrum ipsa odio iste qui,
          </div>
        </div>
        <div class="left">
          <div class="pro">
            <ul id="productsList">
              <li class="list-title">Links</li>
              <li>Home</li>
              <li>Service</li>
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div class="pro">
            <div class="list-title">Address</div>
            <p class="address">
              Adama - Head Office, <br />
              <span>EMAIL US:</span> ixsolutions01@gmail.com
              <br />
              <span>CALL US:</span> 0922111111111 <br />
            </p>
          </div>
        </div>
      </div>
      <div class="footer-developer">
        {/* <div class="developer-info">
          <div class="motto">move faster with untitled UI</div>
          <div class="motto-text">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
        </div> */}
        <div class="developer-copy">&#9400; IX IT and Marketing solution</div>
      </div>
    </footer>
  );
}

export default Footer;

{
  /* <div className="footer">
      <div className="about-ix">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="about-ix-moot">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum earum
          nesciunt accusantium repellendus nostrum ipsa odio iste qui,
        </div>
      </div>
      <div className="footer-links">
        <p className="links-header">Links</p>
        <ul>
          <li> Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <div className="address">
        <div className="links-header">Address</div>
        <ul>
          <li>address lab technology</li>
        </ul>
      </div>
    </div> */
}
