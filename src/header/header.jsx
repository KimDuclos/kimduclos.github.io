import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Projects from "../projects/projects";
import Skills from "../skills/skills";
import ContactForm from "../contactForm/contactForm";

const Header = () => {
  return (
    <>
      <h1>Kim Duclos</h1>
      <h2>Web Development & Design</h2>
      <Router>
        <nav className="navbar">
          <Link to="/">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
           <hr />
        </nav>
        <div className="Header">
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={ContactForm} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Header;
