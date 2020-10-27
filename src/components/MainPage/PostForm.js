import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import { addPost } from '../Posts'

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  submitHandler = async (event) => {
    console.log("submitHandler");
    event.preventDefault();
    // this.props.addPost(this.state)
    let headers = {
      "access-token": localStorage.getItem("access-token"),
      uid: localStorage.getItem("uid"),
      client: localStorage.getItem("client"),
      "Content-Type": "application/json; charset=utf-8",
    };

    await fetch("https://postify-api.herokuapp.com/posts", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
      }),
    })
      .then((response) => {
        console.log("HERE");

        response.json();
      })
      .then(() => {
        this.props.forceUpdate();
      })
      .catch((err) => console.log("ERR", err));
  };

  handleChangeInput = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
    console.log(event.target.value);
  };

  render() {
    return (
      <form className="form-post">
        <TextField
          id="title-input"
          label="Type your title"
          variant="outlined"
          className="input-post"
          name="title"
          onChange={this.handleChangeInput}
        />
        <TextField
          id="description-input"
          name="description"
          label="Type your description"
          variant="outlined"
          className="input-post"
          style={{ marginTop: 10 }}
          onChange={this.handleChangeInput}
        />
        <Button
          onClick={this.submitHandler}
          variant="contained"
          color="primary"
          style={{ marginTop: 10, width: "100%" }}
        >
          Add Post
        </Button>
      </form>
    );
  }
}

export default PostForm;
