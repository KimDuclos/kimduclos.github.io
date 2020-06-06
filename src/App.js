import React from "react";
import "./App.css";
import Header from "./header/header.jsx";
import Projects from "./projects/projects";
import Skills from "./skills/skills.jsx";
import ContactForm from "./contactForm/contactForm.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Skills />
      <ContactForm />
    </div>
  );
}

export default App;
