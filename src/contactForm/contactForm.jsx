import React from 'react';
import axios from 'axios';
import About from '../about/about.jsx';
import './contactForm.scss';
import Footer from '../footer/footer.jsx';

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: ''
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		axios({
			method: 'POST',
			url: 'https://p6pns5z7xb.execute-api.us-west-2.amazonaws.com/prod/ContactFormLambda',
			//url: "https://p3q9lau86e.execute-api.us-west-2.amazonaws.com/prod/ContactFormLambda",
			//data: this.state
			data: {
				email: 'kimduclos@gmail.com',
				subject: `Contact From ${this.state.name} ${this.state.email}`,
				message: this.state.message
			}
		}).then(response => {
			if (response.status === 200) {
				alert('Message Sent.');
				this.resetForm();
			} else if (response.data.status === 'fail') {
				alert('Message failed to send.');
			}
		});
	}

	resetForm() {
		this.setState({ name: ' ', email: ' ', message: ' ' });
	}

	render() {
		return (
			<div>
				<div className="allContactInfo">
					<About />
					<div className="bottomSection" id="contact">
						<div className="contactForm">
							<h1>Contact me:</h1>
							<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
								<div className="form-group name">
									{/* <label htmlFor="name">Name</label> */}
									<input
										type="text"
										required
										className="form-control"
										id="name"
										value={this.state.name}
										onChange={this.onNameChange.bind(this)}
										placeholder="Name"
									/>
								</div>
								<div className="form-group email">
									{/* <label htmlFor="exampleInputEmail1">Email address</label> */}
									<input
										type="email"
										required
										className="form-control"
										id="email"
										aria-describedby="emailHelp"
										value={this.state.email}
										onChange={this.onEmailChange.bind(this)}
										placeholder="Email"
									/>
								</div>
								<div className="form-group message">
									{/* <label htmlFor="message">Message</label> */}
									<textarea
										className="form-control"
										rows="5"
										id="message"
										required
										value={this.state.message}
										onChange={this.onMessageChange.bind(this)}
										placeholder="Message"
									/>
								</div>
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}

	onNameChange(event) {
		this.setState({ name: event.target.value });
	}

	onEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	onMessageChange(event) {
		this.setState({ message: event.target.value });
	}
}

export default ContactForm;
