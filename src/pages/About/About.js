import { Link } from 'react-router-dom';
import './about.css'
import headshot from '../../images/headshot.png'

const About = () => {

 
    return (
      <main>
       <div className="intro">Hello, I'm a software developer based in Miami!</div>
       <div className="bio-title">
         <div className="name-title">
           <p className="name">Hector Perez</p>
           <p className="title">Developer (Fullstack)</p>
         </div>
         <div className="picture-cont">
           <img alt="headshot-of-me" className="avi-img" src={headshot} />
         </div>
       </div>
       <div className="about-cont">
         <h5 className="about-title">About Me</h5>
         <p className="bio-body">I'm a software developer based in Miami Lakes, Florida with a passion for both front-end and back-end engineering.
            When I'm not online you can most likely find me at the gym or playing video games. If you want to see more, check out my portfolio. </p>
         <Link className="work-link" to="/work">My portfolio ›</Link>
         <div className="bio-body-cont">
            <h5 className="bio-body-title">Bio</h5>
            <div className="facts-cont">
            <div className="fact-cont">
            <p class="year">1996</p>
            <p className="facts"> Born and raised in Miami, Florida.</p>
            </div>
            <div className="fact-cont">
            <p class="year">2020</p>
            <p className="facts"> Graduated Florida International University with a Bachelors in International Business.</p>
            </div>
            <div className="fact-cont">
            <p class="year">2022</p>
            <p className="facts"> Graduated University of Miami Full Stack Development Bootcamp after 6 months.</p>
            </div>
            <div className="fact-cont">
            <p class="year">2022 -</p>
            <p className="facts">Freelance Full Stack Developer</p>
            </div>
            </div>
            <div className="contact-cont">
              <div className="contact-title">Social</div>
              <div className="socials-cont">
              <a className="social-link" target="_blank"  rel="noreferrer" href="https://github.com/hpere102"><i class="bi-github"></i>hpere102</a>
              <a className="social-link" target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/hector-daniel-perez-631283179/"><i class="bi-linkedin"></i>hectordanielperez</a>
              <a className="social-link" target="_blank"  rel="noreferrer" href="https://twitter.com/nanni_____"><i class="bi-twitter"></i>nannii</a>
              <a className="social-link"  rel="noreferrer" href="mailto:hector.pere102@gmail.com"><i class="bi bi-envelope-fill"></i>hector.pere102@gmail.com</a>
              </div>

            </div>
         </div>
       </div>
  </main>
  
    );
  };

export default About;