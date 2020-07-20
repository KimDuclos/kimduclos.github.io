import React from "react";
import "./projects.scss";
import ProjectBox from "../projects/projectBox.jsx";
import Footer from "../footer/footer.jsx";

const Projects = () => {
  return (
    <>
    <div className="projects">
        <ProjectBox 
            image="/images/flex-together.png" 
            alt="Flex Together Image"
            caption="FlexTogether is an app prototype that pairs seniors with workout partners based on schedule availability of both parties." 
            link="https://flextogether.netlify.com/"
        />
        <ProjectBox 
            image="/images/live-safe.png" 
            alt="Live SafeImage"
            caption="LiveSafe warns of potential natural disasters that affect safety and insurance rates. This was created in collaboration with Data Scientists" 

            link="https://livesafe.netlify.app/"
        />
        <ProjectBox 
            image="/images/lunchr.png" 
            alt="Lunchr Image"
            caption="Lunchr is an app prototype that can be used to donors with schools requesting monetary funding for student lunches." 
            link="https://luncher-team.github.io/luncher-app-frank-UI/"
        />
        <ProjectBox 
            image="/images/simpson-says.png" 
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
