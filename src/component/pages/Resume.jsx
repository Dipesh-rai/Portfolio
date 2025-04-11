import React from "react";
import "./../../sass/base/resume.scss";

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="section-box">
      <h1 className="section-heading">Resume</h1>

      <div className="resume-block">
        <h2 className="block-title">Career Objective</h2>
        <p>
          Motivated and self-driven frontend developer with a passion for creating
          visually appealing and interactive websites. Completed a professional
          web design course from <strong>IT Training Nepal</strong> and built
          several responsive and user-friendly projects. 
        </p>
      </div>

      <div className="resume-block">
        <h2 className="block-title">Education</h2>
          <div className="item">
            <h3>The Insight Vision Secondary School</h3>
            <p>+2 passed in computer management course.</p>
          <h3 className="web">Professional Web Design Training</h3>
          <span className="duration">IT Training Nepal | 2024</span>
          <p>
            Learned HTML, CSS, SCSS, Tailwind, JavaScript, React, Responsive
            Design, UI/UX principles, Git, and project deployment. Built
            hands-on projects from scratch with focus on clean design and
            real-world functionality.
          </p>
        </div>
        <div className="item">
          <h3>Self-Learning & Practice</h3>
          <p>
            Continuously improving skills through documentation, tutorials,
            open-source codebases, and portfolio project work.
          </p>
        </div>
      </div>

      <div className="resume-block">
        <h2 className="block-title">Technical Skills</h2>
        <p>
          <strong>Languages & Markup:</strong> HTML5, CSS3, JavaScript (ES6+), SCSS<br/>
          <strong>Frameworks & Libraries:</strong> React.js, Tailwind CSS, Framer Motion<br/>
          <strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Figma<br/>
          <strong>Design Focus:</strong> Responsive Design, UI/UX principles, accessibility
        </p>
      </div>

      <div className="resume-block">
        <h2 className="block-title">Projects</h2>
        <div className="item">
          <h3>Personal Portfolio Website</h3>
          <p>
            Designed and built a fully responsive personal portfolio using React,
            SCSS, and Framer Motion. Implemented dark/light mode, interactive
            navigation, animations, and mobile responsiveness.
          </p>
        </div>
        <div className="item">
          <h3>Interactive Landing Page</h3>
          <p>
            Developed an animated landing page with smooth transitions,
            responsive layout, and reusable components using Tailwind and React
            hooks.
          </p>
        </div>
      </div>

      <div className="resume-block download-resume">
        <a href="/cv.pdf" download>
          <i className="bi bi-download"></i> Download Resume
        </a>
        </div>
        </div>
    </section>
  );
};

export default Resume;
