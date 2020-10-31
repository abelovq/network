import React from "react";
import { connect } from "react-redux";
import { fetchGetComments } from "../../model/actions/commentAction";

import { CommentContentxxx } from "./Comment";

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

  filteredComments = (arr, id) => {
    const result = arr.filter((comment) => comment.commentable_id === +id);
    // console.log("res", result);
    return result;
  };

  render() {
    return (
      <>
        {this.props.comments.length &&
        this.filteredComments(this.props.comments, this.props.postID).length ? (
          <>
            {this.filteredComments(this.props.comments, this.props.postID).map(
              (comment) => (
                <CommentContentxxx
                  comment={comment}
                  key={comment.id}
                  {...this.props}
                />
              )
            )}
          </>
        ) : (
          <>
            <p style={{ textAlign: "center" }}>Sorry, comments are out</p>
          </>
        )}
      </>
    );
    //   return this.props.comments.map((comment) => {
    //     return (
    //       <CommentContentxxx comment={comment} key={comment.id} {...this.props} />
    //     );
    //   });
    // }
  }
}

const mapStateToProps = (state) => {
  // console.log(state.commentReducer);
  return {
    comments: state.commentReducer.comments,
  };
};

export default connect(mapStateToProps, null)(CommentsAll);
