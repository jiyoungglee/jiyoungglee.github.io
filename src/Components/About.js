import "../Styles/About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function About() {
  return(
    <div className="about">
      <img className="profile-pic" alt="profile" src={require('../Previews/Jiyoung.jpeg')} />
      <div className="about-background">
        <div className="about-content-container">
          <div className="about-content">
            <h2>Jiyoung Lee</h2>
            <div className="about-me">Hi my name is Jiyoung Lee and I am a front-end developer. Feel free to explore my page and take a look at my projects.</div>
            <a className="about-me-link" href="#aboutme">MORE</a>
            <div className="icon-strip">
              <a href="https://github.com/jiyoungglee" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 16 16" className="github">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jiyoung-g-lee" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} inverse className="icon" /></a>
              <a href="/">
                <FontAwesomeIcon icon={faFile} inverse className="icon" />
              </a>
              <a href="mailto:jiyoung.g.lee118@gmail.com"><FontAwesomeIcon icon={faEnvelope} inverse className="icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
