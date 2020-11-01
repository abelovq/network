import React from "react";
import Comment from "./Comment";
import EditModal from "./Modal";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      postID: null,
    };
  }

  componentDidMount() {
    // console.log(this.props.match.params.postID);
    // fetch(`https://postify-api.herokuapp.com/posts/${this.props.match.params.postID}`, )
    // console.log(this.props.match.params.postID);

    let postID = this.props.match.params.postID;

    let headers = {
      "access-token": localStorage.getItem("access-token"),
      uid: localStorage.getItem("uid"),
      client: localStorage.getItem("client"),
    };
    let requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };
    fetch(`https://postify-api.herokuapp.com/posts/${postID}`, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          post: result,
          postID,
        })
      )

      .catch((error) => console.log("error", error));
  }

  updatePost = (newPost) => {
    console.log("new post", newPost);
    this.setState({ post: newPost });
  };
  render() {
    return (
      <div className="card">
        {this.state.post ? (
          <>
            <div>
              <div className="title">{this.state.post.title}</div>

              <div className="description">{this.state.post.description}</div>
            </div>
            <EditModal post={this.state.post} updatePost={this.updatePost} />
            <Comment postID={this.state.postID} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 20,
                fontSize: 13,
              }}
            >
              <div className="id">User ID: {this.state.post.user_id}</div>
              <div className="created">
                Created at:
                {`${new Date(this.state.post.created_at.toString())}`}
              </div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default Post;
