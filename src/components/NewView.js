import React from "react";
import "./NewView.css";
function NewView({ img }) {
  return (
    <div className="NewView">
      <video autoPlay width="100%" height="100%">
        <source src={img} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default NewView;
