import React from "./node_modules/react";
import "./SkillSection.scss";

const SkillSection = (props) => {
  return (
    <div className="skillSection">
      <div className="title">{props.title}</div>
      <div className="list">
        <ul>{props.list}</ul>
      </div>
    </div>
  );
};

export default SkillSection;
