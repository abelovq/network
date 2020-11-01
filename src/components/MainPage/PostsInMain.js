import React from "react";
import { Link } from "react-router-dom";
// import PostForm from './MainPage/PostForm'
import { connect } from "react-redux";
// import MainPage from "./MainPage/MainPage";
// import { getPosts } from "../../model/actions/postsAction";

// import Comment from "./Comment";

export class PostsInMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  render() {
    // console.log(this.props.posts);
    const posts = this.props.posts;
    const postId = this.props.match && this.props.match.params.postID;
    const postToRender = postId
      ? posts.filter((post) => post.id === +postId)
      : posts;
    return (
      <>
        {postToRender.map((post) => {
          return <PostInMain post={post} key={post.id} {...this.props} />;
        })}
      </>
    );
  }
}

class PostInMain extends React.Component {
  filteredComments = (arr, id) => {
    const result = arr.filter((comment) => comment.commentable_id === +id);
    // console.log("res", result);
    return result;
  };

  render() {
    let date = `${new Date(this.props.post.created_at.toString())}`;

    // onClick={() => this.props.history.push(`/posts/${this.props.post.id}`)}
    return (
      <div className="card" key={this.props.post.id}>
        <Link to={`/posts/${this.props.post.id}`}>
          <div className="title">{this.props.post.title}</div>
        </Link>
        <div className="description">{this.props.post.description}</div>
        {/* <Comment /> */}

        <div className="comments-counter">
          Comments:{" "}
          {
            this.filteredComments(this.props.comments, this.props.post.id)
              .length
          }
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 20,
            fontSize: 13,
          }}
        >
          <div className="id">User ID: {this.props.post.user_id}</div>
          <div className="created">Created at: {date}</div>
        </div>
      </div>
    );
  }
}

// export default PostsInMain;

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    comments: state.commentReducer.comments,
  };
};

export default connect(mapStateToProps, null)(PostsInMain);
