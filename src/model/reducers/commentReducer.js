import { CREATE_COMMENT, FETCH_GET_COMMENTS, REQUEST_COMMENTS } from "../types";

let initialState = {
  comment: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return { comments: state.comment.concat(action.payload), ...state };
    // case CREATE_COMMENT_ADD:
    //     return {}
    case REQUEST_COMMENTS:
      return { ...state };
    case FETCH_GET_COMMENTS:
      return { ...state, comment: action.payload.reverse() };

    default:
      return state;
  }
};

export default commentReducer;
