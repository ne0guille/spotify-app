import { FETCH_TRACK_SUCCESS, FETCH_TRACK_FAILURE } from '../actions/types';

const initialState = {
   byId: {},
   allIds: [],  
   error: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRACK_SUCCESS:
      return {
        ...state,
        byId: action.payload.byId,
        allIds: action.payload.allIds,
        error: undefined
      };
    case FETCH_TRACK_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}