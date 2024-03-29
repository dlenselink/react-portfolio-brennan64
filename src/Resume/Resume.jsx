import React from 'react';
import resume from '../assets/Resume.pdf';
import resPic from '../assets/resume.PNG';
import './Resume.scss';

export const Resume = () => (
  <div>
    <div className="resumePage">
      <h1>Resume Page</h1>
      <img src={resPic} alt="resume preview" className="resPic img-fluid "></img>
      <footer className="resumeFooter">
        <ul>
          <li>
            <a href={resume} data-testid="resume-download" download>
              Download Resume PDF
            </a>
          </li>
          <li>
            <a href="https://github.com/brennan64" data-testid="resume-github">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/brennan-heley/" data-testid="resume-linkedin">
              Linkedin
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
);
