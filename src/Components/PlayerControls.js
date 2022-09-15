import { useContext } from "react";
import { Actions, PlayerContext } from "../store/PlayerContext";
import { projects } from "../store/Projects";

import "../Styles/PlayerControls.css";

function PlayerControls() {
  const { state, dispatch } = useContext(PlayerContext);

  const playIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M8 5v14l11-7z"></path></svg>
  const pauseIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
  const nextIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>
  const previousIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" ><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></svg>
  

  function play() {
    if (state.paused) {
      state.videoRef.play();
    } else if (!state.paused) {
      state.videoRef.pause();
    }
    dispatch({
      type: Actions.PAUSE,
      payload: {
        paused: !state.paused,
      }
    })
  }

  function next() {
    if (projects.length > state.index+1) {
      const nextProject = projects[state.index + 1];

      dispatch({
        type: Actions.UPDATE,
        payload: {
          index: state.index + 1,
          name: nextProject.name,
          demo: nextProject.demo,
          description: nextProject.description,
          open: state.open,
          paused: false,
        }
      })
    }
  }

  function previous() {
    if (state.index !== 0) {
      const previousProject = projects[state.index - 1];

      dispatch({
        type: Actions.UPDATE,
        payload: {
          index: state.index - 1,
          name: previousProject.name,
          demo: previousProject.demo,
          description: previousProject.description,
          open: state.open,
          paused: false,
        }
      })
    }
  }

  return (
    <div className="player-controls">
      <button className="skip-button" onClick={previous}>
        {previousIcon}
      </button>
      <button className="play-pause-button" onClick={play}>
          { state.paused
            ? playIcon
            : pauseIcon
          }
      </button>
      <button className="skip-button" onClick={next}>
        {nextIcon}
      </button>
    </div>
  )
}

export default PlayerControls;
