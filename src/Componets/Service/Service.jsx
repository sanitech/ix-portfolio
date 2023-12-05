import React from "react";
import "./Service.css";
import ServiceCard from "./ServiceCard";
import { service } from "../../data";
function Service() {
  // service.map((data) => {
  //   console.log(data);
  // });
  return (
    <div className="service" id="explore">
      <div className="service-sub-grid">
        {service.map((data) => {
          return data.hardware.map((hardware, key) => {
            return <ServiceCard data={hardware} key={key} />;
          });
        })}
      </div>
      <div className="service-sub-grid">
        {service.map((data) => {
          return data.software.map((hardware, key) => {
            return <ServiceCard data={hardware} key={key} />;
          });
        })}
      </div>
      <div className="service-sub-grid">
        {service.map((data) => {
          return data.graphics.map((hardware, key) => {
            return <ServiceCard data={hardware} key={key} />;
          });
        })}
      </div>
      <div className="service-sub-grid">
        {service.map((data) => {
          return data.marketing.map((hardware, key) => {
            return <ServiceCard data={hardware} key={key} />;
          });
        })}
      </div>
    </div>
  );
}

export default Service;
