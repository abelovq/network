import React from "react";
import { Link } from "react-router-dom";
// import PostForm from './MainPage/PostForm'
import { connect } from "react-redux";
// import MainPage from "./MainPage/MainPage";
import { fetchPost } from "../../model/actions/postsAction";
// import OnePost from "./OnePost";

// import Comment from "./Comment";

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.getFetchedPosts();
  }

  getFetchedPosts() {
    const action = fetchPost();
    this.props.dispatch(action);
  }

  render() {
    // console.log("Posts", this.props);
    const posts = this.props.posts;
    const postId = this.props.match && this.props.match.params.postID;
    const postToRender = postId
      ? posts.filter((post) => post.id === +postId)
      : posts;
    return (
      <>
        {postToRender.map((post) => {
          return <OnePost post={post} key={post.id} {...this.props} />;
        })}
      </>
    );
  }
}

class OnePost extends React.Component {
  render() {
    let date = `${new Date(this.props.post.created_at.toString())}`;
    // console.log("One post", this.props);
    // onClick={() => this.props.history.push(`/posts/${this.props.post.id}`)}
    return (
      <div className="card" key={this.props.post.id}>
        <Link to={`/posts/${this.props.post.id}`}>
          <div className="title">{this.props.post.title}</div>
        </Link>
        <div className="description">{this.props.post.description}</div>
        {/* <Comment /> */}
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

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state.postsReducer);
  return {
    posts: state.postsReducer.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
