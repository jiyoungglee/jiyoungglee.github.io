import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import '../Styles/ProjectItem.css';
import { useState } from "react";


function ProjectItem({ index, link, name, description }) {
  const [descOpen, setDescOpen] = useState(false);
  return (
    <div className="project">
      <div className={`project-item ${descOpen && "selected"}`} onClick={() => setDescOpen(!descOpen)}>
        <span className="project-number">{index}</span>
        <FontAwesomeIcon className="link-icon" icon={faLink} />
        <span className="project-name">{name}</span>
      </div>
      {descOpen 
        && 
        <div className="project-description">
          {description}
        </div>
      }
    </div>
  )
}

export default ProjectItem;