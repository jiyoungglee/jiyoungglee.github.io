import { useContext, useEffect, useRef } from 'react';
import { Actions, PlayerContext } from '../store/PlayerContext';

function Video() {
  const { state, dispatch } = useContext(PlayerContext);
  const videoRef = useRef();

  useEffect(() => {
    function changeVideo(videoRef) {
      dispatch({
        type: Actions.LOAD,
        payload: {
          videoRef,
        }
      })
    }
    changeVideo(videoRef.current);
  }, [dispatch, state.demo]);

  return (
    <video ref={videoRef} autoPlay loop muted src={state.demo} type="video/mp4">
    </video>
  )
}

export default Video;
