import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Actions, PlayerContext } from "../store/PlayerContext";
import PlayerControls from "./PlayerControls";
import PreviewPopup from "./PreviewPopup";

import "../Styles/PreviewMode.css";

function PreviewMode() {
  const { state, dispatch } = useContext(PlayerContext);
  
  function togglePlayer() {
    dispatch({
      type: Actions.TOGGLE,
      payload: !state.open
    })
  }

  return (
    <div>
      <PreviewPopup />
      <div className="footer">
        <div className="preview-bar">
          <div className="left-controls">
            <PlayerControls />
          </div>
          <div className="project-controls">
            <span>{state.name}</span>
          </div>
          <div className="right-controls">
            <button>
              {state.open
                ? <FontAwesomeIcon icon={faCaretDown} size="xl" onClick={togglePlayer}/>
                : <FontAwesomeIcon icon={faCaretUp} size="xl" onClick={togglePlayer}/>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewMode;
