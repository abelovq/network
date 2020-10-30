import React from "react";
import { connect } from "react-redux";
import { fetchGetComments } from "../../model/actions/commentAction";

import { CommentContentxxx } from "./Comment";

// const CommentsAll = (props) => {
//   if (!props.comments.length) {
//     return <p className="text-center">Sorry, no comments</p>;
//   }
//   return props.comments.map(function (comment) {
//     return (
//       <CommentContentxxx
//         props={props}
//         comment={comment}
//         key={props.comment.id}
//       />
//     );
//   });
// };

class CommentsAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }

  componentDidMount() {
    this.getComment();
  }
  getComment = () => {
    const action = fetchGetComments();
    this.props.dispatch(action);
  };

  render() {
    console.log(this.props);
    if (!this.props.comments.length) {
      return <p style={{ textAlign: "center" }}>Sorry, comments are out</p>;
    }
    return this.props.comments.map((comment) => {
      return (
        <CommentContentxxx comment={comment} key={comment.id} {...this.props} />
      );
    });
  }
}

const mapStateToProps = (state) => {
  console.log(state.commentReducer);
  return {
    comments: state.commentReducer.comments,
  };
};

export default connect(mapStateToProps, null)(CommentsAll);
