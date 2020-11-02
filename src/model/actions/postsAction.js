import { CREATE_POST, REQUEST_POSTS } from "../types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPost(postID) {
  return {
    type: REQUEST_POSTS,
    postID: postID,
  };
}
