import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight, faLink, faPlay } from "@fortawesome/free-solid-svg-icons";

import '../Styles/ProjectItem.css';

function ProjectItem({ index, link, name, description, descOpen, setDescOpen, setPlayerOpen }) {
  function select() {
    if (descOpen === index) {
      setDescOpen(null)
    } else {
      setDescOpen(index)
    }
  }

  return (
    <div className="project">
      <div className={`project-item${descOpen===index ? " selected" : ""}`} onClick={select}>
        <span className="project-number">{index}</span>
        <div className="project-icon" onClick={() => setPlayerOpen(true)}>
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div className="project-icon">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
        <span className="project-name">{name}</span>
        {descOpen===index ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
      </div>
      {descOpen===index 
        && 
        <div className="project-description">
          {description}
        </div>
      }
    </div>
  )
}

export default ProjectItem;