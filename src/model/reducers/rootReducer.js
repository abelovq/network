import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
// import { postsReducer } from "./postsReducer";
import authReducer from "./signUpReducer";
// // import { mainPageReducer } from
// // import { profileReducer } from

export const rootReducer = combineReducers({
  loginReducer,
  authReducer,
  // posts: postsReducer,
});
