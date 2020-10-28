import { REQUEST_COMMENTS, CREATE_COMMENT } from "../types";

export function fetchGetComments() {
  return {
    type: REQUEST_COMMENTS,
  };
}

export function fetchComment(payload) {
  return {
    type: CREATE_COMMENT,
    payload: payload,
  };
}
