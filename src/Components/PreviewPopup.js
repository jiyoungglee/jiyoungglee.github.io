import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Actions, PlayerContext } from '../store/PlayerContext';
import ProjectList from './ProjectList';
import ProjectDescription from './ProjectDescription';

import '../Styles/PreviewPopup.css';

function PreviewPopup({ children }) {
  const tabs = [
    {
      name: 'PROJECTS',
      id: 'projects',
    },
    {
      name: 'DESCRIPTION',
      id: 'description',
    },
  ];

  const { state, dispatch } = useContext(PlayerContext);
  const [tabSelected, setTabSelected] = useState('description');

  function exitPlayer() {
    dispatch({
      type: Actions.RESET,
    });
  }

  return (
    <div className={state.open ? 'popup' : 'popup minimized'}>
      <div className={`video-container ${state.open ? 'preview-left' : 'miniplayer'}`}>
        {children}
        { !state.open
          && (
          <div className="exit-preview">
            <button type="button" className="exit-button" onClick={exitPlayer}>
              <FontAwesomeIcon icon={faX} size="lg" />
            </button>
          </div>
          )}
      </div>
      { state.open
        && (
        <div className="preview-right">
          <div className="preview-tabs">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab ${tab.id === tabSelected ? 'open' : ''}`}
                onClick={() => setTabSelected(tab.id)}
                onKeyPress={() => setTabSelected(tab.id)}
                role="button"
                tabIndex={0}
              >
                {tab.name}
              </div>
            ))}
          </div>
          <div className="tab-content">
            { tabSelected === 'projects'
              ? <ProjectList />
              : <ProjectDescription />}
          </div>
        </div>
        )}
    </div>
  );
}

PreviewPopup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreviewPopup;
