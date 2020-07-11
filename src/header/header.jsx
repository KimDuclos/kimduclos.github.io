import React from './node_modules/react';
import { BrowserRouter as Router, Route, Link, Switch } from './node_modules/react-router-dom';
import './Header.scss';
import Projects from '../Projects/Projects.jsx';
import Skills from '../Skills/Skills.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';

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
						<Link to="/Skills">Skills</Link>
						<Link to="/ContactForm">Contact</Link>
					</nav>
				</div>
			</div>
			<div className="projectSection">
				<Switch>
					<Route exact path={process.env.PUBLIC_URL + "/"} component={Projects}></Route>
					<Route exact path={process.env.PUBLIC_URL + "/Skills"} component={Skills}></Route>
					<Route exact path={process.env.PUBLIC_URL + "/ContactForm"} component={ContactForm}></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default Header;
