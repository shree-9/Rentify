import React from "react";
import "./WhyChooseUs.css";

import { FaHome, FaDollarSign, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        <h2 className="why-choose-us-title">Why You Should Work With Us</h2>
        <p className="why-choose-us-subtitle">
          We are dedicated to making your journey to a new home simple,
          transparent, and successful.
        </p>

        <div className="why-choose-us-cards">
          <div className="why-choose-us-card">
            <div className="card-icon">
              <FaHome size={40} color="#007bff" />
            </div>
            <h3 className="card-heading">Wide Range of Properties</h3>
            <p className="card-description">
              From modern downtown apartments to spacious suburban houses, our
              extensive listings have something for every lifestyle and budget.
              Find your perfect match with our easy-to-use search tools.
            </p>
          </div>

          <div className="why-choose-us-card">
            <div className="card-icon">
              <FaDollarSign size={40} color="#007bff" />
            </div>
            <h3 className="card-heading">Buy or Rent Homes</h3>
            <p className="card-description">
              Whether you’re looking to put down roots or need the flexibility
              of renting, we provide expert guidance for every step. Our
              platform simplifies the process for both buyers and renters.
            </p>
          </div>

          <div className="why-choose-us-card">
            <div className="card-icon">
              <FaShieldAlt size={40} color="#007bff" />
            </div>
            <h3 className="card-heading">Trusted by Thousands</h3>
            <p className="card-description">
              Join a growing community of happy homeowners and renters who found
              their space with us. Our commitment to transparent dealings and
              dedicated support has made us a name you can rely on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
