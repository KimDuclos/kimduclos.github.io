import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./header.scss";
import Projects from "../projects/projects";
import Skills from "../skills/skills";
import ContactForm from "../contactForm/contactForm.jsx";

const Header = () => {
  return (
    <Router>
      <div className="headerBlock">
        <div className="titleBlock">
          <div className="name">Kim Duclos</div>
          <div className="subtitle">Web Development & Design</div>
        </div>
        <div className="navBlock">
          <nav className="navbar">
            <Link to="/">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contactForm">Contact</Link>
          </nav>
          </div>
      </div>
          <div className="projectSection">
            <Switch>
              <Route exact path="/" component={Projects} />
              <Route path="/skills" component={Skills} />
              <Route path="/contactForm" component={ContactForm} />
            </Switch>
          </div>
    </Router>
  );
};

export default Header;
