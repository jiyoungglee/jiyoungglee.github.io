import { useContext, useEffect, useRef } from 'react';
import { Actions, PlayerContext } from '../store/PlayerContext';

function Video() {
  const { state, dispatch } = useContext(PlayerContext);
  const videoRef = useRef();

  useEffect(() => {
    function changeVideo(video) {
      dispatch({
        type: Actions.LOAD,
        payload: {
          videoRef: video,
        },
      });
    }
    changeVideo(videoRef.current);
  }, [dispatch, state.demo]);

  return (
    <video ref={videoRef} autoPlay loop muted src={state.demo} type="video/mp4" />
  );
}

export default Video;
