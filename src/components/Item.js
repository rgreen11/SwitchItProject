import React from "react";
import "../styles/item.css";

export default ({ src, alt }) => {
  return (
    <div className="item">
      <img src={src} alt={alt} />
    </div>
  );
};
