import { createSelector } from "reselect";
import { pathOr } from "ramda";

const getArtists = (state) => state.byId;
const allIds = (state) => state.allIds;
const getArtistById = (state, props) =>
  state.byId[pathOr("", ["match", "params", "id"], props)];

export const getAllArtists = createSelector(
  [allIds, getArtists],
  (allIds, byId) => allIds.map((id) => byId[id])
);
export const getArtist = createSelector(
  [getArtistById],
  (artist) => artist
);
