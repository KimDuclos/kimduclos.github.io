import React from "react";
import "./projects.scss";
import ProjectBox from "./projectBox.jsx";
import Footer from "../footer/footer.jsx";

const Projects = () => {
  return (
    <>
    <div className="projects">
        <ProjectBox caption="LiveSafe warns homebuyers of potential natural disasters that could affect safety and insurance rates." />
        <ProjectBox caption="FlexTogether pairs seniors with workout partners based on schedule availability of both parties." />
        <ProjectBox caption="Lunchr connects donars with schools requesting monetary funding for student lunches." />
        <ProjectBox caption="Simpsom says is a fun app that accesses a database filled with thousands of Simpsons quotes." />
    </div>
    <Footer />
    </>
  );
};

export default Projects;
