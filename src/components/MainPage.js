import React from "react";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./MainPage.css";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  submitHandler = (event) => {};

  changeInputHandler = (event) => {};

  render() {
    return (
      <form className="form-post" onSubmit={this.submitHandler}>
        <TextField
          id="title-input"
          label="Type your title"
          variant="outlined"
          className="input-post"
          value={this.state.title}
          name="title"
          // onChange={this.changeInputHandler}
        />
        <TextField
          id="description-input"
          name="description"
          label="Type your description"
          variant="outlined"
          className="input-post"
          style={{ marginTop: 10 }}
          value={this.state.description}
          // onChange={this.changeInputHandler}
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

// class Posts extends React.Component {

// }

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <div className="title">Title</div>
        <div className="description">Description</div>
        <Comment />
      </div>
    );
  }
}

class Comments extends React.Component {}

class CommentForm extends React.Component {
  render() {
    return (
    <form>
      <TextField
        id="comment-input"
        label="Type your comment"
        variant="outlined"
        className="input-comment"
        style={{ marginTop: 10 }}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 10, width: "100%" }}
      >
        Add Comment
      </Button>
    </form>
    )
  }
}

class CommentContent extends React.Component {
  render() {
    return (
      <AccordionDetails className="comment">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </AccordionDetails>
    );
  }
}

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="show-comments">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Show Comments
          </AccordionSummary>
          <CommentForm />
          <CommentContent />
          <CommentContent />
        </Accordion>
      </div>
    );
  }
}

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "#fff", marginRight: 15 }}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className="link" to="/login">
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <SimpleMenu />
        </nav>
        <div className="wrapper">
          <PostForm />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  }
}

export default MainPage;
