import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className="home-title">Where Text Meets Grit</h1>
        <p className="home-subtitle">
          Unleash the power of raw expression and clarity with our tools.
        </p>
        <div className="home-buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">See Pricing</button>
        </div>
      </div>

      <div className="home-right">
        <img
          src="https://via.placeholder.com/500"
          alt="Placeholder"
          className="home-image"
        />
      </div>
    </div>
  );
}

export default Home;
