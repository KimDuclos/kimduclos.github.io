import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './Header.scss';
import Projects from '../Projects/Projects.jsx';
import Skills from '../Skills/Skills.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';

const Header = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
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
					<Route path="/Skills" component={Skills}></Route>
					<Route path="/ContactForm" component={ContactForm}></Route>
					<Route exact path="/" component={Projects}></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default Header;
