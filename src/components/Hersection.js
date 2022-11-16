import React from "react";
import "./Cards.css";
import hero from "../components/hero.svg";
import myimg from "../components/myimg.jpg";

function herosection() {
  return (
    <div>
      <div className="container">
        <div className="avatar">
          <img src={`https://robohash.org/25?set=set5`} alt="Owner" />
        </div>
        <div className="content">
          <div className="Heading">
            <h1>Web Designer & Frontend Developer </h1>
            <p>
              I design and code beautifully simple things, and I love what I do.
            </p>
          </div>

          <img className="heroimg" src={hero} alt="Owner"></img>
          <p>Follow me on:</p>
          <p>
            <span>
              <a
                href="https://twitter.com/home "
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-3x fa-twitter"></i>
              </a>
            </span>
            <span>
              <a
                href="https://github.com/SaptakCr7"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-3x fa-github"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/saptak-sinha-79a593229/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-3x fa-linkedin"></i>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default herosection;
