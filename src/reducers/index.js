import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { loggedReducer } from "./isLogged";
import { messageReducer } from "./message";

export const rootReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
  message: messageReducer
})
