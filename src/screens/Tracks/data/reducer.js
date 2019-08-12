import { TRACK_PLAY_INIT, TRACK_PLAY_STOP } from './actionTypes';

const initialState = {
   selected: {},
   isPlaying: false   
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRACK_PLAY_INIT:
      return {
        ...state,
        selected: action.payload,
        isPlaying: true        
      };
    case TRACK_PLAY_STOP:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}