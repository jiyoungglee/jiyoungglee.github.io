import { faBackwardStep, faCaretUp, faForwardStep, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/PreviewBar.css";

function PreviewBar() {
  return (
    <div className="footer">
      <div className="preview-bar">
        <div className="player-controls">
          <FontAwesomeIcon icon={faBackwardStep} size="xl" />
          <FontAwesomeIcon icon={faPlay} size="2x" className="play-button"/>
          <FontAwesomeIcon icon={faForwardStep} size="xl" />
        </div>
        <div className="project-controls">
          <img alt="thumbnail" src={require("../Previews/portfolio-preview.png")} />
          <div className="project-info">
            <span className="project-name">Portfolio Project</span>
          </div>
        </div>
        <div className="right-controls">
          <FontAwesomeIcon icon={faCaretUp} size="xl" />
        </div>
      </div>
    </div>
  )
}

export default PreviewBar;
