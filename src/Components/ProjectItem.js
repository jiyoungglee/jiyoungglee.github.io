import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight, faLink, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

import '../Styles/ProjectItem.css';
import { useContext } from "react";
import { Actions, PlayerContext } from "../store/PlayerContext";

function ProjectItem({ index, link, name, description, demo, preview, descOpen, setDescOpen }) {
  const { state, dispatch } = useContext(PlayerContext);

  function seeDescription() {
    if (descOpen === index) {
      setDescOpen(null)
    } else {
      setDescOpen(index)
    }
  }

  function play() {
    dispatch({
      type: Actions.UPDATE,
      payload: {
        index,
        name,
        demo, 
        preview, 
        open: true,
      }
    })
  }

  return (
    <div className={`project${descOpen===index ? " selected" : ""}`}>
      <div className="project-item">
        <span className="project-number">{index}</span>
        <div className="project-icon" onClick={play}>
          {state.index===index ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} /> }
        </div>
        <div className="project-icon">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
        <div className="project-text" onClick={play}>
          <div className="project-name">{name}</div>
          {state.index===index && <div>Playing...</div>}
        </div>
        <div onClick={seeDescription} className="project-icon">
          {descOpen===index ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
        </div>
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