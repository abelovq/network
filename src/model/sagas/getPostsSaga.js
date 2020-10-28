import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_POST, REQUEST_POSTS } from "../types";

export default function* sagasWatcherPost() {
  yield takeEvery(REQUEST_POSTS, sagaWorkerPost);
}
function* sagaWorkerPost(action) {
  const payload = yield call(fetchPosts);
  yield put({ type: FETCH_POST, payload });
}

async function fetchPosts(postID) {
  const res = await fetch(`https://postify-api.herokuapp.com/posts`, {
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
