import { combineReducers } from "redux";

// import album from "../screens/Artist/reducer";
import artist from "../screens/Artist/data/reducer";
import search from "../screens/Search/data/reducer";

const rootReducer = combineReducers({
  artist,
  //  album,
  search
});

export default rootReducer;
