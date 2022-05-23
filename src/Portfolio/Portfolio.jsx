import React from 'react';
import weatherApp from '../assets/weather-app.PNG';
import regExTutorial from '../assets/regex-tutorial.PNG';
import sportsFinder from '../assets/sports-finder.PNG';
import codeQuiz from '../assets/code-quiz.PNG';
import teamProfGen from '../assets/team-prof-generator.PNG';
import techBlog from '../assets/tech-login-page.PNG';
import './Portfolio.scss';

export const Portfolio = () => (
  <div className="container-fluid project-grid ">
    <h1>Portfolio, Click Images to view project</h1>
    <div className="row">
      <div className="col">
        <a href="https://brennan64.github.io/weather-app/">
          <img src={weatherApp} alt="weather application, api project" />
        </a>
        <a href="https://gist.github.com/brennan64/ac37b9b9cb8cfa2bdec7b6db371c0e5c">
          <img src={regExTutorial} alt="Reg Ex Tutorial, educational markdown page." />
        </a>
      </div>
      <div className="col">
        <a href="https://fchang1720.github.io/Sporting-Event-Finder/">
          <img src={sportsFinder} alt="sports finder, a group project that uses multiple apis." />
        </a>
        <a href="https://brennan64.github.io/CodingQuiz/">
          <img src={codeQuiz} alt="Timed Javascript coding quiz" />
        </a>
      </div>
      <div className="col">
        <a href="https://github.com/brennan64/team-profile-generator">
          <img
            src={teamProfGen}
            alt="Command line application that creates a web template for a team profile."
          />
        </a>
        <a href="https://frozen-bayou-00211.herokuapp.com/">
          <img src={techBlog} alt="tech blog application with login and commenting functionality" />
        </a>
      </div>
    </div>
  </div>
);
