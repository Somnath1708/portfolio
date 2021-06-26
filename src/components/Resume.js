import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

export default class Resume extends Component {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<section id="resume">
				<div className="row education">
					<div className="three columns header-col">
						<h1>
							<span>Education</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						{resumeData.education &&
							resumeData.education.map((item) => {
								return (
									<div className="row item">
										<div className="twelve columns">
											<h3>{item.UniversityName}</h3>
											<p className="info">{item.specialization}</p>
											<p className="info">{item.CGPA}</p>
											<p className="info">{item.Batch}</p>
											<p className="info">{item.Board}</p>
										</div>
									</div>
								);
							})}
					</div>
				</div>
				<div className="row work">
					<div className="three columns header-col">
						<h1>
							<span>Projects</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						{resumeData.project &&
							resumeData.project.map((item) => {
								return (
									<div className="row item">
										<div className="twelve columns">
											<h3>{item.Topic}</h3>
											<p className="info">{item.Duration}</p>
											<p className="info">{item.Objective}</p>
											<p className="info">{item.Tools}</p>
										</div>
									</div>
								);
							})}
					</div>
				</div>

				<div className="row skill">
					<div className="three columns header-col">
						<h1>
							<span>Skills</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						<div>
							<ul className="skills">
								{resumeData.skills &&
									resumeData.skills.map((item) => {
										return (
											<li>
												<h1 />
												<em className="info">{item.skillname}</em>
											</li>
										);
									})}
							</ul>
						</div>
					</div>
				</div>

				<div className="row skill">
					<div className="three columns header-col">
						<h1>
							<span>Achievements</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						<div>
							<ul className="skills">
								{resumeData.achievements &&
									resumeData.achievements.map((item) => {
										return (
											<div className="row item">
												<div className="twelve columns">
													<h3>{item.name}</h3>
													<p className="info">{item.topic}</p>
													<p className="info">{item.date}</p>
												</div>
											</div>
										);
									})}
							</ul>
						</div>
					</div>
				</div>
				<div className="row skill">
					<div className="three columns header-col">
						<h1>
							<span>Resume</span>
						</h1>
					</div>
					<div className="nine columns main-col">
						<ul className="social">
							{resumeData.resume &&
								resumeData.resume.map((item) => {
									return (
										<li key={item.name}>
											<a href={item.url} target="_blank">
												<i className={item.className} />
											</a>
										</li>
									);
								})}
						</ul>
					</div>
				</div>
			</section>
		);
	}
}
