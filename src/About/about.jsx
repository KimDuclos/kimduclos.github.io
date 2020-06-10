import React from "react";
import "../About/about.scss";

const About = () => {
  return (
    <div className="allAboutInfo">
      <div className="aboutSection">
        <img src="./images/profilePic.jpeg" alt="profile pic" />
        <p>
          I’m a full-stack developer who is constantly creating and learning. I
          write readable and performance-driven code. Check me out on{" "}
          <a href="http://www.github.com/KimDuclos">GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default About;
