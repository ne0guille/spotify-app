import { combineReducers } from "redux";

import artist from "../screens/Artist/data/reducer";
import search from "../screens/Search/data/reducer";
import track from "../screens/Tracks/data/reducer";

const rootReducer = combineReducers({
  artist,
  search,
  track
});

export default rootReducer;
