import React from "react";
import profilePic from "../assets/profile-pic.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className=" home-frame">
      <header>
        <h1>Brennan M. Heley</h1>
      </header>
      <img src={profilePic} alt="profile-picture" />
      <footer className="mainFooter">
        <a href="https://github.com/brennan64">GitHub</a> ||
        <a href="https://www.linkedin.com/in/brennan-heley/">Linkedin</a>
      </footer>
    </div>
  );
}
