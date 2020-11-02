import { CREATE_POST, FETCH_POSTS, REQUEST_POSTS } from "../types";

let initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { posts: state.posts.concat(action.payload), ...state };
    case REQUEST_POSTS:
      return { ...state };
    case FETCH_POSTS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

export default postsReducer;
