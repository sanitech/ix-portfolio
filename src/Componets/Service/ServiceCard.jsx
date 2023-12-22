import React from "react";

function ServiceCard({ keys, data }) {
  console.log("key", keys);
  return (
    <div className="service-card">
      <div className="service-text">{data}</div>
      <div className="service-number">{keys > 10 ? keys : `0${keys}`}.</div>
    </div>
  );
}

export default ServiceCard;
