import { Actions, PlayerContext } from "../store/PlayerContext";
import Video from './Video';
import ProjectList from './ProjectList';
import { useContext, useEffect } from "react";

import '../Styles/PreviewPopup.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";


function PreviewPopup() {
  const { state, dispatch } = useContext(PlayerContext);

  function exitPlayer() {
    dispatch({
      type: Actions.RESET,
    })
  }

  return (
    <div className={ state.open ? "popup" : "miniplayer" }>
      <div className="preview-left">
        <Video />
        { !state.open 
          && 
          <div className="exit-preview">
            <button className="exit-button" onClick={exitPlayer}>
              <FontAwesomeIcon icon={faX} size="lg" />
            </button>
          </div>
        }
      </div>
      {state.open 
        &&  <div className="preview-right"><ProjectList /></div>
      }
    </div>
  )
}

export default PreviewPopup;
