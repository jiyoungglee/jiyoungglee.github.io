import { createContext, useReducer } from "react";

export const Actions = {
  UPDATE: 'UPDATE',
  RESET: 'RESET',
  TOGGLE: 'TOGGLE',
  LOAD: 'LOAD',
  PAUSE: 'PAUSE',
}

export const initialState = {          
  index: null,
  name: null,
  demo: null,
  open: false,
  videoRef: null,
  paused: true,
}

const reducer = (state, {type, payload}) => {
    switch(type) {
      case Actions.UPDATE:
        return {
          ...state,
          index: payload.index,
          name: payload.name,
          demo: payload.demo,
          open: payload.open,
          paused: payload.paused,
        }
      case Actions.LOAD:
        return {
          ...state,
          videoRef: payload.videoRef,
        }
      case Actions.PAUSE:
        return {
          ...state,
          paused: payload.paused,
        }
      case Actions.TOGGLE:
        return {
          ...state,
          open: payload
        }
      case Actions.RESET:
        return initialState;
      default: return state;
    }
}

export const PlayerContext = createContext(initialState);

export default function PlayerContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch };

  return(
    <PlayerContext.Provider value={value}>
      {props.children}
    </PlayerContext.Provider>
  )
}
