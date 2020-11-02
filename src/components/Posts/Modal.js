import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EditModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = React.useState({});

  React.useEffect(() => {
    if (props.post) {
      setPost(props.post);
    }
  }, [props.post]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchChangePost = async (postID, data) => {
    try {
      const res = await fetch(
        `https://postify-api.herokuapp.com/posts/${postID}`,
        {
          method: "PUT",
          headers: {
            "Access-Token": localStorage.getItem("access-token"),
            client: localStorage.getItem("client"),
            uid: localStorage.getItem("uid"),
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(data),
        }
      );
      const newPost = await res.json();
      props.updatePost(newPost);
      handleClose();
    } catch (err) {
      console.log("error:", err.message);
      handleClose();
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newPost = {
      title: post.title,
      description: post.description,
    };

    if (!props.post.user_id === +localStorage.getItem("user_id")) {
      return console.error(
        "You can't change another guy's post, stop it, dude."
      );
    }
    fetchChangePost(props.post.id, newPost);
  };

  const handleChangeTitle = (event) => {
    event.persist();
    const newPost = { ...post };

    newPost.title = event.target.value;
    setPost(newPost);
  };

  const handleChangeDescription = (event) => {
    event.persist();
    const newPost = { ...post };

    newPost.description = event.target.value;
    setPost(newPost);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form className="form-post" onSubmit={submitHandler}>
        <TextField
          id="title-input"
          label="Type your title"
          variant="outlined"
          className="input-post"
          name="title"
          onChange={handleChangeTitle}
          value={post.title}
        />
        <TextField
          id="description-input"
          name="description"
          label="Type your description"
          variant="outlined"
          className="input-post"
          style={{ marginTop: 10 }}
          onChange={handleChangeDescription}
          value={post.description}
        />
        <Button
          onClick={submitHandler}
          variant="contained"
          color="primary"
          style={{ marginTop: 10, width: "100%" }}
        >
          Save changes
        </Button>
      </form>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Edit Post
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
