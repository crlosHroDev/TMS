import React from "react";
import photo from "../../images/slider_1.jpg";
import "./hero.css";

function Hero(props) {
  return (
    <figure className="hero">
      <img src={photo} />;
    </figure>
  );
}

export default Hero;
