import { faBackwardStep, faForwardStep, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Actions, PlayerContext } from "../store/PlayerContext";
import { projects } from "../store/Projects";

import "../Styles/PlayerControls.css";

function PlayerControls() {
  const { state, dispatch } = useContext(PlayerContext);

  function play() {
    state.videoRef.play();
    dispatch({
      type: Actions.PAUSE,
      payload: {
        paused: false
      }
    })
  }
  
  function pause() {
    state.videoRef.pause();
    dispatch({
      type: Actions.PAUSE,
      payload: {
        paused: true
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
          preview: nextProject.preview,
          open: state.open,
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
          preview: previousProject.preview,
          open: state.open,
        }
      })
    }
  }

  return (
    <div className="player-controls">
      <FontAwesomeIcon icon={faBackwardStep} size="xl" onClick={previous} />
      { state.paused
        ? <FontAwesomeIcon icon={faPlay} size="2x" className="play-button" onClick={play} />
        : <FontAwesomeIcon icon={faPause} size="2x" className="play-button" onClick={pause} /> 
      }
      <FontAwesomeIcon icon={faForwardStep} size="xl" onClick={next} />
    </div>
  )
}

export default PlayerControls;
