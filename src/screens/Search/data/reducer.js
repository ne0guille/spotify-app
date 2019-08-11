import {
  SEARCH_ARTIST_INIT,
  SEARCH_ARTIST_FAILURE,
  SEARCH_ARTIST_SUCCESS,
  SEARCH_TRACKS_INIT,
  SEARCH_TRACKS_FAILURE,
  SEARCH_TRACKS_SUCCESS,
  SEARCH_FILTER_CHANGE
} from "./actionTypes";

const initialState = {
  data: [],
  error: undefined,
  history: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTIST_INIT:
    case SEARCH_TRACKS_INIT:
      return {
        ...initialState,
        isLoading: true,
        history: [action.payload, ...state.history]
      };
    case SEARCH_ARTIST_SUCCESS:
    case SEARCH_TRACKS_SUCCESS:
      return {
        ...state,        
        data: action.payload,
        isLoading: false,
        error: undefined
      };
    case SEARCH_ARTIST_FAILURE:
    case SEARCH_TRACKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
      case SEARCH_FILTER_CHANGE: {
        return {
          ...state,
          data: []
        }
      }
    default:
      return state;
  }
};
