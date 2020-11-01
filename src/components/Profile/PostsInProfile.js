import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { fetchPost } from "../../model/actions/postsAction";

// import CommentInProfile from "./CommentInProfile";

export class PostsInProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    if (!this.props.posts.length) {
      const action = fetchPost();
      this.props.dispatch(action);
    }
  }

  render() {
    const posts = this.props.posts;
    const filteredPosts = posts.filter(
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
    return (
      <div className="card" key={this.props.post.id}>
        <Link to={`/posts/${this.props.post.id}`}>
          <div className="title">{this.props.post.title}</div>
        </Link>
        <div className="description">{this.props.post.description}</div>
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
