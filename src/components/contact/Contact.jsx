import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section id="contact">
			<h2>Contact</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<form ref={form} onSubmit={sendEmail}>
						<input type="text" name="name" placeholder="Name:" required />
						<input type="text" name="email" placeholder="Email:" required />
						<textarea
							name="message"
							placeholder="Message:"
							rows="10"
							required
						></textarea>
						<button type="submit" className="btn btn-primary">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
