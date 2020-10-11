import React from "react";
import "./About.scss";

function About(props) {
  console.log(props);

  return (
    <div className="about__container">
      <span>
        "Freedom is the freedom to say that two plut two make four, If that is
        granted, all else follows"
      </span>
      <span>- George Orwell, 1984</span>
    </div>
  );
}

export default About;
