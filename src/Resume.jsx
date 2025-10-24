import React from "react";
import "./Resume.css";
import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";

export default function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resume-title">My Resume</h2>
      <p className="resume-intro">
        A quick look at my <strong>education</strong>, <strong>experience</strong>, 
        and <strong>skills</strong> that define who I am as a developer and designer.
      </p>

      <div className="resume-content">
        {/* Left Side - Education & Experience */}
        <div className="resume-left">
          <h3 className="section-heading">
            <SchoolIcon className="icon" /> Education
          </h3>
          <div className="resume-card">
            <h4>Bachelor in Computer Science</h4>
            <p className="resume-year">2020 - 2024</p>
            <p>University of Technology, Lahore</p>
          </div>

          <div className="resume-card">
            <h4>Full Stack Web Development</h4>
            <p className="resume-year">2023</p>
            <p>Bano Qabil Program – Lahore</p>
          </div>

          <h3 className="section-heading">
            <WorkIcon className="icon" /> Experience
          </h3>
          <div className="resume-card">
            <h4>React & Laravel Developer (Intern)</h4>
            <p className="resume-year">2024 - Present</p>
            <p>Worked on dynamic web applications with full-stack integration, UI design, and API systems.</p>
          </div>

          <div className="resume-card">
            <h4>Freelance Graphics Designer</h4>
            <p className="resume-year">2022 - Present</p>
            <p>Delivered creative branding and social media campaigns for clients worldwide.</p>
          </div>
        </div>

        {/* Right Side - Skills */}
        <div className="resume-right">
          <h3 className="section-heading">
            <StarIcon className="icon" /> Technical Skills
          </h3>
          <ul className="skills-list">
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</li>
            <li><strong>Backend:</strong> PHP, Laravel, MySQL</li>
            <li><strong>Design:</strong> Figma, Canva, Photoshop</li>
            <li><strong>Marketing:</strong> SEO, Facebook & Instagram Ads</li>
          </ul>

          <h3 className="section-heading">Soft Skills</h3>
          <ul className="skills-list">
            <li>Communication & Presentation</li>
            <li>Team Collaboration</li>
            <li>Creativity & Problem Solving</li>
            <li>Time Management</li>
          </ul>

          <button className="resume-btn">
            <DownloadIcon className="icon" /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}









<div className="services-grid">
        {/* Web Development */}
        <div className="service-card">
          <CheckroomIcon className="service-icon" />
<h3>Men’s Suits</h3>
<p>Premium pant coat designs tailored for class and confidence.</p>

        </div>

        {/* UI/UX Design */}
        <div className="service-card">
          <CheckroomIcon className="service-icon" />
<h3>Men’s Suits</h3>
<p>Premium pant coat designs tailored for class and confidence.</p>

        </div>

        {/* Backend Solutions */}
        <div className="service-card">
          <CheckroomIcon className="service-icon" />
<h3>Men’s Suits</h3>
<p>Premium pant coat designs tailored for class and confidence.</p>

        </div>

        {/* Digital Marketing */}
        <div className="service-card">
          <CheckroomIcon className="service-icon" />
<h3>Men’s Suits</h3>
<p>Premium pant coat designs tailored for class and confidence.</p>

        </div>
      </div>