import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import filmsReducer from "./films/filmReducer";

const rootReducer = combineReducers({
  user: userReducer,
  films: filmsReducer,
});

export default rootReducer;
