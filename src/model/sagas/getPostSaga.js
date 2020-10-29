import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_ONE_POST, REQUEST_PAGE_POSTS } from "../types";

//LOADING POSTS
export default function* sagasWatcherOnePost() {
  yield takeEvery(REQUEST_PAGE_POSTS, sagaWorkerPost);
}

function* sagaWorkerPost(action) {
  let postID = "";
  if (action.postID === undefined) {
    postID = "";
  } else {
    postID = action.postID;
  }

  const payload = yield call(fetchPosts, postID);
  yield put({ type: FETCH_ONE_POST, payload });
}

async function fetchPosts(postID) {
  const res = await fetch(`https://postify-api.herokuapp.com/posts/${postID}`, {
    method: "GET",
    headers: {
      "Access-Token": localStorage.getItem("access-token"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return await res.json();
}
