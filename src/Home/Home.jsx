import profilePic from '../assets/profile-pic.jpg';
import './Home.scss';

export const Home = () => (
  <div className=" home-frame">
    <header>
      <h1>Brennan M. Heley</h1>
    </header>
    <img src={profilePic} alt="profile" />
    <footer className="mainFooter">
      <a href="https://github.com/brennan64" data-testid="home-github">
        GitHub
      </a>
      ||
      <a href="https://www.linkedin.com/in/brennan-heley/" data-testid="home-linkedin">
        Linkedin
      </a>
    </footer>
  </div>
);
