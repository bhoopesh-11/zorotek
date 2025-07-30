import React from "react";
import "./Home.css";
import BlurText from "../effects/BlurText"; // Ensure this is the correct relative path

function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="home-container">
      <div className="home-left">
        <BlurText
          text="Where Tech Meets Grit"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="home-title"
        />

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

