import React from "react";

function ServiceCard({ data, key }) {
  return (
    <div className="service-card">
      <div className="service-text">{data}</div>
      <div className="service-number">0{key}.</div>
    </div>
  );
}

export default ServiceCard;
