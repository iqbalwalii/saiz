import { combineReducers } from "redux";
import { AlertReducer } from "./alertReducer";
import { AuthReducer, authSelector } from "./authReducer";
import { ProfileReducer, profileSelector } from "./profileReducer";
export { authSelector, profileSelector };
export const rootReducer = combineReducers({
  AuthReducer,
  AlertReducer,
  ProfileReducer,
});
