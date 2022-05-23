import './About.scss';
import walkingCouple from '../assets/walking-couple.jpg';
import ellaEars from '../assets/ella-ears.jpg';
import gordySmile from '../assets/gordy-smile.jpg';

export const About = () => (
  <div className="about-text">
    <h1>About Me</h1>
    <p>
      {`Hello World! My name is Brennan Heley. I am a full stack software developer specialising in
      front end and JS. I am currently seeking employment in the software field. I spend most of my
      free time walking my dogs, disc golfing, or camping. I am engaged to be married this November
      so that also eats up a lot of time for planning! My dogs are both rescues and are mixes of
      around 15 different breeds a piece. Them and my fiancee Meagan are currently my main
      priorities in life. I am 29 years old and never graduated college. I worked for a company
      called "The Shamrock Group" for 9 years and they were great to me. I credit them for teaching
      me my work ethic. However, my body could only take so much labor before I started to
      reconsider my path. In 2019 I decided to start taking part time online courses for things like
      basic data structures and coding principles. Since then I have done much independent studying.
      Still unable to land a job in the field, this March I started a full time bootcamp and quit my
      job. I figured the structure and support would help further my education in a more serious
      way. It has been a blast to learn about so much new (to me) technology. I am set to graduate
      on June 6th and will be able to start working ASAP after that date. My main goals after class
      are to learn and repay my fiancee for her support during my schooling.`}
    </p>
    <div className="img-folder">
      <img src={walkingCouple} alt="happy-couple" />
      <img src={ellaEars} alt="Eleanor the dog" />
      <img src={gordySmile} alt="Gordon the dog" />
    </div>
  </div>
);
