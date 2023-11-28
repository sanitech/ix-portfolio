import React from "react";
import "./Consult.css";
import consult from "../../assets/images/contact.png";

function Consultant() {
  return (
    <div className="consultant">
      <div className="consult-container">
        <img src={consult} alt="" className="corner" />
        <div className="consult-header">
          <div className="consult-text">TAKE YOUR CHANCE</div>
          <div className="free-consult">GET A FREE CONSULTATION</div>
          <p>
            Free consultations ac turpis egestas maecenas pharetra convallis
            posuere morbi nunc velit dignissim sodales ipsum nunc aliquet
            bibendum enim facilisis gravida neque.
          </p>

          <div className="consult-form">
            <input type="text" placeholder="Send Email" name="" id="" />
            <button className="btn-sent">Let's Do it</button>
          </div>
        </div>
      </div>
      Consultant
    </div>
  );
}

export default Consultant;
