import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from "../actions/types";

const initialState = { loading: false, users: [], error: null };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
