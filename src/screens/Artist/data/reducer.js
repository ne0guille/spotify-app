import { FETCH_ARTIST_SUCCESS, FETCH_ARTIST_FAILURE, FETCH_ALBUMS_SUCCESS } from './actionTypes';

const initialState = {
   byId: {},
   allIds: [],  
   error: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        byId: { ...state.byId, ...action.payload.byId },
        allIds:[ ...state.allIds, action.payload.id],
        error: undefined
      };
    case FETCH_ARTIST_FAILURE:
      return {
        ...state,
        error: action.error
      };
      case FETCH_ALBUMS_SUCCESS:
          return {
            ...state,
              byId: {
                ...state.byId,  
                [action.payload.id]: {
                  ...state.byId[action.payload.id],
                  albums: action.payload.albums
                }                
              }
          };
      
    default:
      return state;
  }
}