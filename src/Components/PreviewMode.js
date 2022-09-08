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
          <PlayerControls />
          <div className="project-controls">
            <img alt="thumbnail" src={state.preview} />
            <div className="project-info">
              <span className="project-name">{state.name}</span>
            </div>
          </div>
          <div className="right-controls">
            {state.open
              ? <FontAwesomeIcon icon={faCaretDown} size="xl" onClick={togglePlayer}/>
              : <FontAwesomeIcon icon={faCaretUp} size="xl" onClick={togglePlayer}/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewMode;
