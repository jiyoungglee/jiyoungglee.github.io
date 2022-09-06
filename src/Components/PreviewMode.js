import { faBackwardStep, faCaretDown, faCaretUp, faForwardStep, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/PreviewMode.css";
import PreviewPopup from "./PreviewPopup";

function PreviewMode({ playerOpen, setPlayerOpen}) {
  return (
    <div>
      {playerOpen && <PreviewPopup />}
      <div className="footer">
        <div className="preview-bar">
          <div className="player-controls">
            <FontAwesomeIcon icon={faBackwardStep} size="xl" />
            <FontAwesomeIcon icon={faPlay} size="2x" className="play-button" />
            <FontAwesomeIcon icon={faForwardStep} size="xl" />
          </div>
          <div className="project-controls">
            <img alt="thumbnail" src={require("../Previews/portfolio-preview.png")} />
            <div className="project-info">
              <span className="project-name">Portfolio Project</span>
            </div>
          </div>
          <div className="right-controls">
            {playerOpen
              ? <FontAwesomeIcon icon={faCaretDown} size="xl" onClick={() => setPlayerOpen(false)}/>
              : <FontAwesomeIcon icon={faCaretUp} size="xl" onClick={() => setPlayerOpen(true)}/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewMode;
