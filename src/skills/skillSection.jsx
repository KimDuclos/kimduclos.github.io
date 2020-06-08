import React from "react";
import "./skillSection.scss";

const SkillSection = (props) => {
  return (
    <>
      <div className="title">{props.title}</div>
      <div className="list"><ul>{props.list}</ul></div>
    </>
  );
};

export default SkillSection;
