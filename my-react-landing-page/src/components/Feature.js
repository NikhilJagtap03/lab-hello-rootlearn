// src/components/Feature.js
import React from "react";

function Feature({ imgSrc, title, description }) {
  return (
    <div className="feature">
      <img src={imgSrc} alt={`${title} icon`} style={{ width: "100%", height: "42%" }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Feature;
