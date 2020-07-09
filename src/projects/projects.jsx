import React from "react";
import "./projects.scss";
import ProjectBox from "./projectBox.jsx";
import Footer from "../footer/footer.jsx";

const Projects = () => {
  return (
    <>
    <div className="projects">
        <ProjectBox 
            image="/images/flex-together.PNG" 
            alt="Flex Together Image"
            caption="FlexTogether pairs seniors with workout partners based on schedule availability of both parties." 
            link="https://flex-together-max.netlify.com/"
        />
        <ProjectBox 
            image="/images/lunchr.PNG" 
            alt="Lunchr Image"
            caption="Lunchr connects donors with schools requesting monetary funding for student lunches." 
            link="https://luncher-team.github.io/luncher-app-frank-UI/"
        />
        <ProjectBox 
            image="/images/live-safe.PNG" 
            alt="Live SafeImage"
            caption="LiveSafe warns homebuyers of potential natural disasters that could affect safety and insurance rates." 

            link="https://livesafe.services/"
        />
        <ProjectBox 
            image="/images/simpson-says.PNG" 
            alt="Simpson Says Image"
            caption="Simpson says is a fun app that accesses a database filled with thousands of Simpsons quotes."
            link="https://simpsonssays.netlify.app/login"
        />
    </div>
    <Footer />
    </>
  );
};

export default Projects;
