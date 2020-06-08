import React from "react";
import "./skills.scss";
import SkillSection from "./skillSection.jsx";

const SkillsList = (props) => {
  return (
    <>
      <div className="skillsTop">
        <SkillSection
          title="Graphic Design Software"
          list=<ul>
            <li>Adobe Photoshop CC</li>
            <li>Adobe Illustrator CC</li>
            <li>Adobe InDesign</li>
            <li>Figma</li>
            <li>Sketch</li>
          </ul>
        />
        <SkillSection
          title="Coding Editors"
          list=<ul>
            <li>Visual Studio Code</li>
            <li>Atom</li>
            <li>Notepad++</li>
            <li>Adobe Dreamweaver CC</li>
          </ul>
        />
        <SkillSection
          title="Website Builders"
          list=<ul>
            <li>Wordpress</li>
            <li>Squarespace</li>
            <li>Wix</li>
          </ul>
        />
        <SkillSection
          title="Coding Languages"
          list=<ul>
            <li>HTML/HTML5</li>
            <li>CSS/CSS3</li>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>Python</li>
          </ul>
        />
      </div>
      <hr />
      <SkillSection
        title="Areas of Exterpise"
        list=<ul>
          <li>Website Design</li>
          <li>UI/UX Design</li>
          <li>Responsive Design</li>
          <li>Website Maitenance & Updates</li>
          <li>Brochure, Flyer & Pamphlet Design</li>
          <li>Corporate Identity (logos, business cards & letterhead)</li>
          <li>Image Manipulation</li>
        </ul>
      />
    </>
  );
};

export default SkillsList;
