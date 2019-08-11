import { createSelector } from 'reselect';

const getTracks = state => state.data;
// const allIds = state => console.log(state) || state.allIds || [];
// const getTrackById = (state, id) => state.byId[id];

// export const getAllTracks = createSelector([allIds, getTracks], (allIds, byId) => allIds.map(getTrackById));
// const getSearchedTracks =  createSelector([getTracks], (tracks) => (allIds.map(getTrackById)));
export const getAllTracks = state => state.data;
export const isSearching = state => state.isLoading;