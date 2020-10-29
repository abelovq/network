import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      commentable_id: null,
      commentable_type: "Post",
      postID: this.props.postID,
    };
    this.changeInput = this.changeInput.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeInput = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(123);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <TextField
          id="comment-input"
          label="Type your comment"
          variant="outlined"
          className="input-comment"
          name="comment"
          style={{ marginTop: 10 }}
          onChange={this.changeInput}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 10, width: "100%" }}
          //   onSubmit={() => console.log(345)}
        >
          Add Comment
        </Button>
      </form>
    );
  }
}
