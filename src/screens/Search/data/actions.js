import {
  SEARCH_ARTIST_INIT,
  SEARCH_ARTIST_FAILURE,
  SEARCH_ARTIST_SUCCESS,
  SEARCH_TRACKS_INIT,
  SEARCH_TRACKS_FAILURE,
  SEARCH_TRACKS_SUCCESS,
  SEARCH_FILTER_CHANGE
} from "./actionTypes";
import spotifyApi from "../../../shared/spotifyService";
import { getTrackInfoFromSearch, getArtistInfoFromSearch } from "./utils";

function fetchTrackRequest(track) {
  return {
    type: SEARCH_TRACKS_INIT,
    payload: track
  };
}

function fetchTrackSuccess(payload: any) {
  return {
    type: SEARCH_TRACKS_SUCCESS,
    payload
  };
}

export const searchTracks = track => dispatch => {
  dispatch(fetchTrackRequest(track));

  console.log(spotifyApi);
  return spotifyApi
    .searchTracks(track)
    .then(response => {
      const tracks = getTrackInfoFromSearch(response);
      dispatch(fetchTrackSuccess(tracks));
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SEARCH_TRACKS_FAILURE,
        err
      });
    });
};

const searchArtistInit = payload => ({
  type: SEARCH_ARTIST_INIT,
  payload
});

const searchArtistSuccess = payload => ({
  type: SEARCH_ARTIST_SUCCESS,
  payload
});

export const searchArtists = name => dispatch => {
  dispatch(searchArtistInit());

  return spotifyApi
    .searchArtists(name)
    .then(response => {
      const artists = getArtistInfoFromSearch(response);
      dispatch(searchArtistSuccess(artists));
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SEARCH_ARTIST_FAILURE,
        err
      });
    });
};

export const filterChange = () => dispatch => dispatch({ type: SEARCH_FILTER_CHANGE })