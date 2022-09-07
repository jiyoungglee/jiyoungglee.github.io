import { useContext, useEffect, useRef } from 'react';
import { PlayerContext } from '../store/PlayerContext';
import '../Styles/PreviewPopup.css';
import ProjectList from './ProjectList';

function PreviewPopup() {
  const { state } = useContext(PlayerContext);
  const videoRef = useRef();

  useEffect(() => {    
    videoRef.current?.load();
  }, [state.demo]);

  return (
    <div className="preview-popup">
      <div className="preview-left">
        <video ref={videoRef} autoPlay loop muted>
          <source src={state.demo} type="video/mp4" />
        </video>
      </div>
      <div className="preview-right">
        <ProjectList />
      </div>
    </div>
  )
}

export default PreviewPopup;
