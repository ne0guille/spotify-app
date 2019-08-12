import { indexBy, prop } from "ramda";

import {
  FETCH_ARTIST_INIT,
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_FAILURE,
  FETCH_ALBUMS_INIT,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILURE,
} from "./actionTypes";
import { mapArtistInfo, mapAlbums } from "./utils";
import spotifyApi from "../../../shared/spotifyService";

const fetchArtistInit = () => ({
  type: FETCH_ARTIST_INIT,
});

const fetchArtistSuccess = (payload) => ({
  type: FETCH_ARTIST_SUCCESS,
  payload,
});

export const getArtistById = (id) => (dispatch) => {
  dispatch(fetchArtistInit());

  return spotifyApi
    .getArtist(id)
    .then((response) => {
      const artist = mapArtistInfo(response);
      const byId = indexBy(prop("id"), [artist]);
      dispatch(fetchArtistSuccess({ byId, id }));
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_ARTIST_FAILURE,
        err,
      });
    });
};

const fetchAlbumsInit = () => ({
  type: FETCH_ALBUMS_INIT,
});

const fetchAlbumsSuccess = (payload) => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload,
});

export const getArtistAlbums = (id) => (dispatch) => {
  dispatch(fetchAlbumsInit());

  return spotifyApi
    .getArtistAlbums(id, { include_groups: ["album"] })
    .then((response) => {
      const albums = mapAlbums(response.items);
      dispatch(fetchAlbumsSuccess({ id, albums }));
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_ALBUMS_FAILURE,
        err,
      });
    });
};
