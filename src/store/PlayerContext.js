import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const Actions = {
  UPDATE: 'UPDATE',
  RESET: 'RESET',
  TOGGLE: 'TOGGLE',
  LOAD: 'LOAD',
  PAUSE: 'PAUSE',
};

export const initialState = {
  index: null,
  name: null,
  demo: null,
  description: null,
  open: false,
  videoRef: null,
  paused: true,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case Actions.UPDATE:
      return {
        ...state,
        index: payload.index,
        name: payload.name,
        demo: payload.demo,
        description: payload.description,
        open: payload.open,
        paused: payload.paused,
      };
    case Actions.LOAD:
      return {
        ...state,
        videoRef: payload.videoRef,
      };
    case Actions.PAUSE:
      return {
        ...state,
        paused: payload.paused,
      };
    case Actions.TOGGLE:
      return {
        ...state,
        open: payload,
      };
    case Actions.RESET:
      return initialState;
    default: return state;
  }
};

export const PlayerContext = createContext(initialState);

export default function PlayerContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { state, dispatch };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
}

PlayerContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
