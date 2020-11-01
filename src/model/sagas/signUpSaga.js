import { FETCH_AUTH_USER, REQUEST_AUTH_USER } from "../types";
import { takeEvery, call, put } from "redux-saga/effects";

export default function* sagasWatcherUserAuth() {
  yield takeEvery(FETCH_AUTH_USER, sagaWorkerUserAuth);
}

function* sagaWorkerUserAuth(action) {
  console.log("dataInfoAUTH");
  const payload = yield call(fetchUserAuth, action);
  yield put({ type: REQUEST_AUTH_USER, payload });
}

async function fetchUserAuth(payload) {
  try {
    const res = await fetch("https://postify-api.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json();

    console.log(result);
  } catch (err) {
    console.log("error:", err.message);
  }
}
