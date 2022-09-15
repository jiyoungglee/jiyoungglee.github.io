import '../Styles/ProjectItem.css';
import { useContext } from "react";
import { Actions, PlayerContext } from "../store/PlayerContext";

function ProjectItem({ index, link, name, description, demo }) {
  const { state, dispatch } = useContext(PlayerContext);

  const playIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M8 5v14l11-7z"></path></svg>
  const pauseIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
  const linkIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>

  function start() {
    dispatch({
      type: Actions.UPDATE,
      payload: {
        index,
        name,
        demo,
        description,
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
    <div className={`project${state.index===index ? " selected" : ""}`}>
      <div className="project-item">
        <span className="project-number">{index + 1}</span>
        <button className="project-play-button" onClick={()=>control(state.videoRef)}>
          {(state.index===index && !state.paused) ? pauseIcon : playIcon}
        </button>
        <div className="project-name" onClick={start}>{name}</div>
        <button className="project-link-button">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linkIcon}
          </a>
        </button>
      </div>
    </div>
  )
}

export default ProjectItem;