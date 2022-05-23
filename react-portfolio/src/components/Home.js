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
      <footer>
        {" "}
        <p>This Portfolio is made with React.</p>
      </footer>
    </div>
  );
}
