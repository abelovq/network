import { CREATE_POST, REQUEST_POSTS, USER_POSTS } from "../types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function getPosts(posts) {
  return {
    type: USER_POSTS,
    payload: posts,
  };
}

export function fetchPost(postID) {
  return {
    type: REQUEST_POSTS,
    postID: postID,
  };
}
