import {
  CREATE_POST,
  FETCH_CHANGED_POST,
  FETCH_ONE_POST,
  FETCH_POST,
  REQUEST_CHANGED_POSTS,
  REQUEST_POSTS,
  USER_POSTS,
} from "../types";

let initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { posts: state.posts.concat(action.payload), ...state };
    case REQUEST_POSTS:
      return { ...state };
    case FETCH_POST:
      return { ...state, posts: action.payload }; //reverse post .reverse()
    case REQUEST_CHANGED_POSTS:
      return { ...state };
    case FETCH_CHANGED_POST:
      return { ...state, posts: action.payload };
    case USER_POSTS:
      return { ...state, posts: action.payload };
    case FETCH_ONE_POST:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

export default postsReducer;
