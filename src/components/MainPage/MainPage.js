import React from "react";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./MainPage.css";
import Comment from './Comment'
import PostForm from './PostForm'
import Post from '../Posts'

// import {connect} from 'react-redux'



function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('client')
    localStorage.removeItem('uid')
    setTimeout(setAnchorEl(null), 500)
  }

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
        <MenuItem onClick={handleClose}><Link className="link" to="/profile">Profile</Link></MenuItem>
        <MenuItem onClick={handleLogout}>
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
    super(props)

    this.state = {
      posts: [],
    }
    this.addPost= this.addPost.bind(this);
  }

  addPost(post) {
    this.setState({
      posts: [...this.state.posts, post]
    })
    console.log(this.state)
  }

  componentDidMount() {

    let headers = {
      "access-token": localStorage.getItem("access-token"),
      "uid": localStorage.getItem("uid"),
      "client": localStorage.getItem("client"),
    }

    let requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };

    fetch("https://postify-api.herokuapp.com/posts", requestOptions)
      .then(response => response.text())
      .then(result => this.setState({ posts: [...this.state.posts, ...JSON.parse(result).slice(0,10)]}))
      .catch(error => console.log('error', error))
  }

  render() {
    const result = this.state.posts.map((post) => {
      return (
          <div className="card" key={post.id}>
            <div className="title">{post.title}</div>
      <div className="description">{post.description}</div>
            <Comment />
          </div>
      )
    })
      return (
      <div>
        <nav className="navbar">
          <SimpleMenu />
        </nav>
        <div className="wrapper">
          <PostForm addPost={this.addPost} />
          {result}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
  // return {
  //   
  // }
// }

// const mapDispatchToProps 

// export default connect(mapStateToProps, null)(MainPage);
export default MainPage
