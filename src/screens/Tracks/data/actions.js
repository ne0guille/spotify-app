import {
  FETCH_TRACK_INIT,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_FAILURE,
  SEARCH_TRACK_INIT,
  SEARCH_TRACK_SUCCESS,
  SEARCH_TRACK_FAILURE
} from "./actionTypes";

import spotifyApi from "../../../shared/spotifyService";

const fetchTrackInit = () => ({
  type: FETCH_TRACK_INIT
});

const fetchTrackSuccess = payload => ({
  type: FETCH_TRACK_SUCCESS,
  payload
});

const getTrackById = id => dispatch => {
  dispatch(fetchTrackInit());

  return spotifyApi
    .getTrack(id)
    .then(response => dispatch(fetchTrackSuccess(response)))
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_TRACK_FAILURE,
        err
      });
    });
};

const searchTrackInit = payload => ({
  type: SEARCH_TRACK_INIT,
  payload
});

const searchTrackSuccess = payload => ({
  type: SEARCH_TRACK_SUCCESS,
  payload
});

const searchTracks = name => dispatch => {
  dispatch(searchTrackInit());

  return spotifyApi
    .searchTracks(name)
    .then(response => dispatch(searchTrackSuccess(response)))
    .catch(err => {
      console.log(err);
      dispatch({
        type: SEARCH_TRACK_FAILURE,
        err
      });
    });
};

export { searchTracks, getTrackById };
