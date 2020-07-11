import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './header.scss';
import Projects from '../projects/projects';
import Skills from '../skills/skills';
import ContactForm from '../contactForm/contactForm.jsx';

const Header = () => {
	return (
		<Router>
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
						<Link to="/skills">Skills</Link>
						<Link to="/contactForm">Contact</Link>
					</nav>
				</div>
			</div>
			<div className="projectSection">
				<Switch>
					<Route Route path={process.env.PUBLIC_URL + "/"} component={Projects} />
					<Route Route path={process.env.PUBLIC_URL + "/skills"} component={Skills} />
					<Route Route path={process.env.PUBLIC_URL + "/contactForm"} component={ContactForm} />
				</Switch>
			</div>
		</Router>
	);
};

export default Header;
