import { combineReducers } from "redux";
import quotes from "./quotes";
import user from "./user";

export default combineReducers({
  quotes,
  user
});
