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
// import Comment from "./Comment";
import PostForm from "./PostForm";
import Posts from "../Posts";

// import { connect } from "react-redux";

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    localStorage.removeItem("user-id");
    setTimeout(setAnchorEl(null), 500);
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
        <MenuItem onClick={handleClose}>
          <Link className="link" to="/profile">
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className="link" to="/posts">
            All posts
          </Link>
        </MenuItem>
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
  render() {
    return (
      <div>
        <nav className="navbar">
          <SimpleMenu />
        </nav>
        <div className="wrapper">
          <PostForm />
          <Posts />
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

// export default connect(null, null)(MainPage);
export default MainPage;
