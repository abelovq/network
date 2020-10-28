import { takeEvery, call, put } from "redux-saga/effects";
import { CREATE_POST, CREATE_POST_ADD } from "../types";

//LOADING POSTS
export default function* sagasWatcherPostAdd() {
  yield takeEvery(CREATE_POST, sagaWorkerPostAdd);
}

function* sagaWorkerPostAdd(action) {
  const dataPost = action.payload;
  const payload = yield call(fetchPostsAdd, dataPost);
  yield put({ type: CREATE_POST_ADD, payload });
}

async function fetchPostsAdd(dataPost) {
  // const acess_token = JSON.parse(localStorage.getItem('access-token'))
  const res = await fetch("https://postify-api.herokuapp.com/posts", {
    method: "POST",
    headers: {
      "Access-Token": localStorage.getItem("access-token"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(dataPost),
  });
  return await res.json();
}
