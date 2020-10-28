import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { createPost, fetchPost } from "../../model/actions/postsAction";

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

  submitHandler = (event) => {
    console.log("submitHandler");
    event.preventDefault();

    const { title } = this.state;
    const { description } = this.state;

    const newPost = {
      title,
      description,
    };

    const action = createPost(newPost);
    this.props.dispatch(action);

    this.handlerSubmit();

    this.setState({ title: "", description: "" });

    // const newPost = {
    //   title: this.state.title,
    //   description: this.state.description,
    // };

    // this.props.createPost(newPost);

    // let headers = {
    //   "access-token": localStorage.getItem("access-token"),
    //   uid: localStorage.getItem("uid"),
    //   client: localStorage.getItem("client"),
    //   "Content-Type": "application/json; charset=utf-8",
    // };

    // await fetch("https://postify-api.herokuapp.com/posts", {
    //   method: "POST",
    //   headers: headers,
    //   body: JSON.stringify({
    //     title: this.state.title,
    //     description: this.state.description,
    //   }),
    // })
    //   .then((response) => {
    //     console.log("HERE");

    //     response.json();
    //   })
    //   .then(() => {
    //     this.props.forceUpdate();
    //   })
    //   .catch((err) => console.log("ERR", err));

    // this.setState({ title: "", description: "" });
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

  handlerSubmit = () => {
    const action = fetchPost();
    this.props.dispatch(action);
  };

  componentDidMount() {
    this.handlerSubmit();
  }

  render() {
    return (
      <form className="form-post" onSubmit={this.submitHandler}>
        <TextField
          id="title-input"
          label="Type your title"
          variant="outlined"
          className="input-post"
          name="title"
          onChange={this.handleChangeInput}
          value={this.state.title}
        />
        <TextField
          id="description-input"
          name="description"
          label="Type your description"
          variant="outlined"
          className="input-post"
          style={{ marginTop: 10 }}
          onChange={this.handleChangeInput}
          value={this.state.description}
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

// export default PostForm;

// const mapDispatchToProps = {
//   createPost,
// };

export default connect(null, null)(PostForm);
