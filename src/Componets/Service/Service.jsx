import React from "react";
import "./Service.css";
import ServiceCard from "./ServiceCard";
function Service() {
  return (
    <div className="service">
      <div className="service-sub-grid">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="service-sub-grid">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="service-sub-grid">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}

export default Service;
