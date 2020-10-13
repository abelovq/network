import React from "react";
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

  render() {
    return (
      <form className="form-post">
        <TextField
          id="title-input"
          label="Type your title"
          variant="outlined"
          className="input-post"
        />
        <TextField
          id="description-input"
          label="Type your description"
          variant="outlined"
          className="input-post"
          style={{ marginTop: 10 }}
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
        <Comments />
      </div>
    );
  }
}

class Comments extends React.Component {
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
          <AccordionDetails className="comment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionDetails className="comment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionDetails className="comment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar"></nav>
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
