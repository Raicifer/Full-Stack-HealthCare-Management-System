import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (<div className="hero container">
    <div className="banner">
      <h1>{title}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo voluptatem laboriosam, quidem provident, commodi minus atque aspernatur laudantium in error corporis aut accusamus ad ipsam delectus natus? Sit ex animi soluta culpa fugit modi expedita a sequi, vero corporis temporibus consequatur, ut laboriosam officia dolorem placeat nam optio facere iure.</p>
    </div>
    <div className="banner">
      <img src={imageUrl} alt="hero" className="animated-image"/>
      <span>
        <img src="/Vector.png" alt="vector" />
      </span>
    </div>
  </div>
  );
};

export default Hero;
