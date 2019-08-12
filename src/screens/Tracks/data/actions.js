import { TRACK_PLAY_INIT, TRACK_PLAY_STOP } from "./actionTypes";

const playTrackInit = (track) => ({
  type: TRACK_PLAY_INIT,
  payload: track,
});

const stopTrackInit = () => ({
  type: TRACK_PLAY_STOP,
});

export const playTrack = (track) => (dispatch) => {
  dispatch(playTrackInit(track));
};

export const stopTrack = (track) => (dispatch) => {
  dispatch(stopTrackInit(track));
};
