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

  function start() {
    dispatch({
      type: Actions.UPDATE,
      payload: {
        index,
        name,
        demo, 
        preview, 
        open: true,
        paused: false,
      }
    })
  }

  function pauseVideo(video) {
    video.pause();
    dispatch({
      type: Actions.PAUSE,
      payload: {
        paused: true
      }
    })
  }

  function resumeVideo(video) {
    video.play();
    dispatch({
      type: Actions.PAUSE,
      payload: {
        paused: false
      }
    })
  }

  function control(video) {
    if(state.index !== index) {
      start()
    }
    if (video.paused) {
      resumeVideo(video)
    } else {
      pauseVideo(video)
    }
  }

  return (
    <div className={`project${descOpen===index ? " selected" : ""}`}>
      <div className="project-item">
        <span className="project-number">{index + 1}</span>
        <div className="project-icon" onClick={()=>control(state.videoRef)}>
          {(state.index===index && !state.paused) ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
        </div>
        <div className="project-icon">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
        <div className="project-text" onClick={start}>
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