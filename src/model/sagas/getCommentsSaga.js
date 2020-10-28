import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_GET_COMMENTS, REQUEST_COMMENTS } from "../types";

export default function* sagasWatcherComments() {
  yield takeEvery(REQUEST_COMMENTS, sagaWorkerComments);
}

function* sagaWorkerComments() {
  const payload = yield call(fetchComments);
  yield put({ type: FETCH_GET_COMMENTS, payload });
}

async function fetchComments() {
  const res = await fetch("https://postify-api.herokuapp.com/comments", {
    method: "GET",
    headers: {
      access_token: localStorage.getItem("access-token"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return await res.json();
}
