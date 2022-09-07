import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight, faLink, faPlay } from "@fortawesome/free-solid-svg-icons";

import '../Styles/ProjectItem.css';
import { useContext } from "react";
import { Actions, PlayerContext } from "../store/PlayerContext";

function ProjectItem({ index, link, name, description, demo, preview, descOpen, setDescOpen }) {
  const { state, dispatch } = useContext(PlayerContext);

  function select() {
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
    <div className="project">
      <div className={`project-item${descOpen===index ? " selected" : ""}`} onClick={select}>
        <span className="project-number">{index}</span>
        <div className="project-icon" onClick={play}>
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div className="project-icon">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
        <span className="project-name">{name}</span>
        {descOpen===index ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
        {state.index===index && <div>Playing...</div>}
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