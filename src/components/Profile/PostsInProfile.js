import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import CommentInProfile from "./CommentInProfile";

export class PostsInProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  render() {
    const posts = this.props.posts;
    const postId = this.props.match && this.props.match.params.postID;
    const postToRender = postId
      ? posts.filter((post) => post.id === +postId)
      : posts;
    const filteredPosts = postToRender.filter(
      (post) => post.user_id === +localStorage.getItem("user_id")
    );
    return (
      <>
        {filteredPosts.map((post) => {
          return <PostInProfile post={post} key={post.id} {...this.props} />;
        })}
      </>
    );
  }
}

class PostInProfile extends React.Component {
  render() {
    // onClick={() => this.props.history.push(`/posts/${this.props.post.id}`)}
    return (
      <div className="card" key={this.props.post.id}>
        <Link to={`/posts/${this.props.post.id}`}>
          <div className="title">{this.props.post.title}</div>
        </Link>
        <div className="description">{this.props.post.description}</div>
        <CommentInProfile />
      </div>
    );
  }
}

// export default PostsInProfile;

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
  };
};

export default connect(mapStateToProps, null)(PostsInProfile);
