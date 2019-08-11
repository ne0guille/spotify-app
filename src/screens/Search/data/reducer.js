import {
  SEARCH_ARTIST_INIT,
  SEARCH_ARTIST_FAILURE,
  SEARCH_ARTIST_SUCCESS,
  SEARCH_TRACKS_INIT,
  SEARCH_TRACKS_FAILURE,
  SEARCH_TRACKS_SUCCESS
} from "./actionTypes";

const initialState = {
  data: [],
  error: undefined,
  history: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTIST_INIT:
    case SEARCH_TRACKS_INIT:
      return {
        ...initialState,
        history: [action.payload, ...state.history]
      };
    case SEARCH_ARTIST_SUCCESS:
    case SEARCH_TRACKS_SUCCESS:
      return {
        ...state,
        // byId: action.payload.byId,
        // allIds: action.payload.allIds,
        data: action.payload,
        error: undefined
      };
    case SEARCH_ARTIST_FAILURE:
    case SEARCH_TRACKS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
