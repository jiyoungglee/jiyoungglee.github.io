import { faBackwardStep, faForwardStep, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Actions, PlayerContext } from "../store/PlayerContext";

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

  return (
    <div className="player-controls">
      <FontAwesomeIcon icon={faBackwardStep} size="xl" />
      { state.paused
        ? <FontAwesomeIcon icon={faPlay} size="2x" className="play-button" onClick={play} />
        : <FontAwesomeIcon icon={faPause} size="2x" className="play-button" onClick={pause} /> 
      }
      <FontAwesomeIcon icon={faForwardStep} size="xl" />
    </div>
  )
}

export default PlayerControls;
