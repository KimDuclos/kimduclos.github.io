import React from "react";
import "./projects.scss";
import ProjectBox from "./projectBox.jsx";

const Projects = () => {
  return (
    <div className="projects">
      <ProjectBox caption="LiveSafe is an app that assists homebuyers in avoiding areas of natural disasters." />
      <ProjectBox caption="FlexTogether pairs senior citizens with virtual workout partners based on schedule availability."/>
      <ProjectBox caption="Lunchr connects donars with schools requesting monetary funding for student lunches."/>
      <ProjectBox caption="Simpsom says is a fun app that accesses a database filled with thousands of Simpsons quotes." />
    </div>
  );
};

export default Projects;
