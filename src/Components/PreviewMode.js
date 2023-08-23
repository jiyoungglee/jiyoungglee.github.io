import { useContext } from 'react';
import { Actions, PlayerContext } from '../store/PlayerContext';
import PlayerControls from './PlayerControls';
import PreviewPopup from './PreviewPopup';

import '../Styles/PreviewMode.css';
import Video from './Video';

function PreviewMode() {
  const { state, dispatch } = useContext(PlayerContext);

  const openPlayerIcon = <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M7 10l5 5 5-5z" /></svg>;

  function togglePlayer() {
    dispatch({
      type: Actions.TOGGLE,
      payload: !state.open,
    });
  }

  return (
    <div>
      <PreviewPopup>
        <Video muted />
      </PreviewPopup>
      <div className="footer">
        <div className="preview-bar">
          <div className="left-controls">
            <PlayerControls />
          </div>
          <div className="project-controls">
            <span>{state.name}</span>
          </div>
          <div className="right-controls">
            <button type="button" className={state.open ? 'caret' : 'caret up'} onClick={togglePlayer}>
              {openPlayerIcon}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewMode;
