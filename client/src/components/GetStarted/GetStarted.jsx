import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Your New Home Awaits</span>
          <span className="secondaryText">
            Join now to discover your ideal rental property.
            <br />
            We make finding your next home simple and fast.
          </span>
          <a className="button" href="mailto:contact@rentify.com">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;