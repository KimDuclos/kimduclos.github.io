import React from "react";
import "./projectBox.scss";

const ProjectBox = (props) => {
  return (
    <div className="boxes">
      <div className="projectBox"></div>
      <div className="caption">{props.caption}</div>
    </div>
  );
};

export default ProjectBox;
