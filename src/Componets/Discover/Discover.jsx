import React from "react";
import "./Discover.css";
import dama from "../../assets/images/dama.png";
function Discover() {
  return (
    <div className="discover">
      <div className="discover-container">
        <div className="aloha">Aloha</div>
        <div className="discover-text">
          PASSION IS <span>ENERGY</span>
        </div>
        <p>
          Ouakee Creative Company cursus risus at ultrices mi tempus imperdiet
          nulla malesuadat risus nullam eget felis eget nunc lobortis mattis.
          Lacus vel facilisis volutpat est velit egestas dui vestibulum mattis
          Strategy ullamcorper morbi Succes Passion.
        </p>

        <img src={dama} alt="" className="discover-corner" />

        <div className="discover-btn">Discover now +</div>
      </div>
    </div>
  );
}

export default Discover;
