import React from 'react'
import {Link} from 'react-router-dom'

import Comment from './MainPage/Comment'

export default class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
    this.addPost = this.addPost.bind(this);
  }

  addPost(post) {
    this.setState({
      posts: [...this.state.posts, post],
    });
    console.log(this.state);
  }

  componentDidMount() {
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

    fetch("https://postify-api.herokuapp.com/posts", requestOptions)
      .then((response) => response.text())
      .then((result) =>
        this.setState({
          posts: [...this.state.posts, ...JSON.parse(result).slice(0, 10)],
        })
      )
      .catch((error) => console.log("error", error));
  }



render() {
  const fetchedPosts = this.state.posts.map((post) => {
    return (
      <Post post={post} key={post.id}/>  
    );
  });

    return (
      <>
      {fetchedPosts}
      </>
    )
}
}

class Post extends React.Component {
render() {
  return (
    <Link to={`/posts/${this.props.post.id}`} >
    <div className="card" key={this.props.post.id}>
        <div className="title">{this.props.post.title}</div>
        <div className="description">{this.props.post.description}</div>
        <Comment />
      </div>
      </Link>
  )
}
}

