import { combineReducers } from "redux";

import usersReducer from "./usersReducer";

export default combineReducers({
  test: () => 5,
  users: usersReducer
});
