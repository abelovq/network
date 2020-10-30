import React from "react";
import { Link } from "react-router-dom";
// import PostForm from './MainPage/PostForm'
import { connect } from "react-redux";
// import MainPage from "./MainPage/MainPage";
// import { getPosts } from "../../model/actions/postsAction";

import Comment from "./Comment";

export class PostsInMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  // componentDidMount() {
  // const action = getPosts();
  // this.props.dispatch(action);
  // console.log(action);
  // let headers = {
  //   "access-token": localStorage.getItem("access-token"),
  //   uid: localStorage.getItem("uid"),
  //   client: localStorage.getItem("client"),
  // };
  // let requestOptions = {
  //   method: "GET",
  //   headers: headers,
  //   redirect: "follow",
  // };
  // fetch("https://postify-api.herokuapp.com/posts", requestOptions)
  //   .then((response) => response.text())
  //   .then((result) =>
  //     this.setState({
  //       posts: [
  //         ...this.state.posts,
  //         ...JSON.parse(result).reverse().slice(0, 10),
  //       ],
  //     })
  //   )
  //   .catch((error) => console.log("error", error));
  // }

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
  };
};

export default connect(mapStateToProps, null)(PostsInMain);
