import PropTypes from 'prop-types';
import { useContext, useEffect, useRef } from 'react';
import { Actions, PlayerContext } from '../store/PlayerContext';

function Video({ muted }) {
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

  if (muted) {
    return (
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        src={state.demo}
        type="video/mp4"
      />
    );
  }
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video ref={videoRef} autoPlay loop src={state.demo} type="video/mp4" />
  );
}

Video.propTypes = {
  muted: PropTypes.bool.isRequired,
};

export default Video;
