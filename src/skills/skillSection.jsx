import React from "react";

const SkillSection = (props) => {
  return (
    <>
      <div className="title">{props.title}</div>
      <div className="list"><ul>{props.list}</ul></div>
    </>
  );
};

export default SkillSection;
