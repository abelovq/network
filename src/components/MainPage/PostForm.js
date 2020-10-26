import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        description: "",
      };
      // this.submitHandler = this.submitHandler.bind(this)
      // this.titleInputHandler = this.titleInputHandler.bind(this)
      // this.descriptionInputHandler = this.descriptionInputHandler.bind(this)
    }
  
    // submitHandler(e) {
    //   e.preventDefault();
    //   const newItem = {
    //     title: this.state.title,
    //     description: this.state.description,
    //     id: Date.now().toString()
    //   };
    //   this.setState(state => ({
    //     items: state.items.concat(newItem),
    //     title: '',
    //     description: ''
    //   }));
    // }
  
    // titleInputHandler = (event) => {
    //   this.setState({ title: event.target.value })
    // };
  
    // descriptionInputHandler = (event) => {
    //   this.setState({ description: event.target.value })
    // };
  
    render() {
      return (
        <form className="form-post" onSubmit={this.submitHandler}>
          <TextField
            id="title-input"
            label="Type your title"
            variant="outlined"
            className="input-post"
            name="title"
            // onChange={this.titleInputHandler}
          />
          <TextField
            id="description-input"
            name="description"
            label="Type your description"
            variant="outlined"
            className="input-post"
            style={{ marginTop: 10 }}
            // onChange={this.descriptionInputHandler}
          />
          <Button
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

  export default PostForm