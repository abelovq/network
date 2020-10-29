import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_CHANGED_POST, REQUEST_CHANGED_POSTS } from "../types";

export default function* sagasWatcherChangePost() {
  yield takeEvery(REQUEST_CHANGED_POSTS, sagaWorkerChangePost);
}

function* sagaWorkerChangePost(action) {
  const postID = action.payload.postID;
  const data = action.payload;
  const payload = yield call(fetchChangePost, postID, data);
  yield put({ type: FETCH_CHANGED_POST, payload });
}

async function fetchChangePost(postID, data) {
  const res = await fetch(`https://postify-api.herokuapp.com/posts/${postID}`, {
    method: "PUT",
    headers: {
      "Access-Token": localStorage.getItem("access-token"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
}
