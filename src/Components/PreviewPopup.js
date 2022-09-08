import { PlayerContext } from "../store/PlayerContext";
import Video from './Video';
import '../Styles/PreviewPopup.css';
import ProjectList from './ProjectList';
import { useContext } from "react";

function PreviewPopup() {
  const { state } = useContext(PlayerContext);

  return (
    <div className={ state.open ? "preview-popup" : "miniplayer" }>
      <div className="preview-left">
        <Video />
      </div>
      {state.open 
        &&  <div className="preview-right"><ProjectList /></div>
      }
    </div>
  )
}

export default PreviewPopup;
