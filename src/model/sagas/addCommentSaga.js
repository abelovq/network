import { takeEvery, call, put } from "redux-saga/effects";
import { CREATE_COMMENT, CREATE_COMMENT_ADD } from "../types";

//LOADING POSTS
export default function* sagasWatcherCommentAdd() {
  yield takeEvery(CREATE_COMMENT, sagaWorkerCommentAdd);
}

function* sagaWorkerCommentAdd(action) {
  const data = action.payload;
  const payload = yield call(fetchCommentAdd, data);
  yield put({ type: CREATE_COMMENT_ADD, payload });
}

async function fetchCommentAdd(data) {
  // const acess_token = JSON.parse(localStorage.getItem('access-token'))
  const res = await fetch("https://postify-api.herokuapp.com/comments", {
    method: "POST",
    headers: {
      access_token: localStorage.getItem("access-token"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  });
}
