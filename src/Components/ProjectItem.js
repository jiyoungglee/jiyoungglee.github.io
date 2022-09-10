import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretLeft, faLink, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
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
    else {
      if (video.paused) {
        resumeVideo(video)
      } else {
        pauseVideo(video)
      }
    }
  }

  return (
    <div className={`project${descOpen===index ? " selected" : ""}`}>
      <div className="project-item">
        <span className="project-number">{index + 1}</span>
        <button onClick={()=>control(state.videoRef)}>
          {(state.index===index && !state.paused) ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
        </button>
        <button>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </button>
        <div className="project-name" onClick={start}>{name}</div>
        <button onClick={seeDescription}>
          {descOpen===index ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretLeft} />}
        </button>
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