import React from "react";
import "./App.css";
import Header from "./header/header.jsx";
import Projects from "./projects/projects";
import SkillSection from "./skills/skillSection.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <SkillSection />
    </div>
  );
}

export default App;
