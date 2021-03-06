import React, { Component } from "react";
import "../App.css";
export default class About extends Component {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<section id="about">
				<div className="row">
					<div className="twelve columns main-col">
						<div>
							<img
								src="images/Resume_image.png"
								alt=""
								style={{ height: "250px" }}
							/>
						</div>
						<h2>About Me</h2>
						<p>{resumeData.aboutme}</p>

						<h2>Contact Details</h2>
						<p className="address">
							<span>{resumeData.name}</span>
							<br />
							<span>{resumeData.residence}</span>
							<br />
							<span>{resumeData.contact_No}</span>
							<br />
							<span>{resumeData.email}</span>
						</p>
					</div>
				</div>
			</section>
		);
	}
}
