import { all, takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import {
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS
} from "../actions/types";

function* helloSaga() {
  console.log("Hello saga");
}

//worker saga, fetching users daga
//on success dispatching response data
//on error dispatching reponse status
function* fetchUsersSaga() {
  try {
    const response = yield axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put({ type: FETCH_USERS_SUCCESS, payload: response.data });
  } catch (err) {
    yield put({ type: FETCH_USERS_ERROR, payload: err.response.status });
  }
}

//watcher saga
function* watchFetchUsers() {
  //watching every FETCH_USERS action, for each running fetchUsersSaga worker saga
  yield takeEvery(FETCH_USERS, fetchUsersSaga);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchFetchUsers()]);
}
