import { faBackwardStep, faForwardStep, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Actions, PlayerContext } from "../store/PlayerContext";
import { projects } from "../store/Projects";

import "../Styles/PlayerControls.css";

function PlayerControls() {
  const { state, dispatch } = useContext(PlayerContext);

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
          open: state.open,
          paused: false,
        }
      })
    }
  }

  return (
    <div className="player-controls">
      <button onClick={previous}>
        <FontAwesomeIcon icon={faBackwardStep} size="lg" />
      </button>
      <button onClick={play}>
        { state.paused
          ? <FontAwesomeIcon icon={faPlay} size="2x" />
          : <FontAwesomeIcon icon={faPause} size="2x" /> 
        }
      </button>
      <button onClick={next}>
        <FontAwesomeIcon icon={faForwardStep} size="lg" />
      </button>
    </div>
  )
}

export default PlayerControls;
