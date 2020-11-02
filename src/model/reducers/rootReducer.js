import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import postsReducer from "./postsReducer";
import authReducer from "./signUpReducer";
import commentReducer from "./commentReducer";

export const rootReducer = combineReducers({
  loginReducer,
  authReducer,
  postsReducer,
  commentReducer,
});
