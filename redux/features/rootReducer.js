import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
const rootReducers = combineReducers({ user: userReducer });
export default rootReducers;
