import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import './header.scss';
import Projects from '../projects/projects.jsx';
import Skills from '../skills/skills.jsx';
import ContactForm from '../contactForm/contactForm.jsx';

const Header = () => {
	return (
		<Router basename="/">
			<div className="headerBlock">
				<a href="https://kimduclos.github.io">
					<div className="titleBlock">
						<div className="name">Kim Duclos</div>
						<div className="subtitle">Web Development & Design</div>
					</div>
				</a>
				<div className="navBlock">
					<nav className="navbar">
						<Link to="/">Projects</Link>
						<Link to="/Skills">Skills</Link>
						<Link to="/ContactForm">Contact</Link>
					</nav>
				</div>
			</div>
			<div className="projectSection">
				<Switch>
					<Route exact path="/" component={Projects}></Route>
					<Route path="/Skills" component={Skills}></Route>
					<Route path="/ContactForm" component={ContactForm}></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default Header;
