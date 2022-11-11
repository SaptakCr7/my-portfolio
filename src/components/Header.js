import React from "react";
import "./header.css";

function header() {
  return (
    <div className="header">
      <img src={`https://robohash.org/25?set=set5`} alt="Owner" />
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">contact</a>
    </div>
  );
}
export default header;
