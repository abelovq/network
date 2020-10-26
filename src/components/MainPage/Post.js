import React from 'react'

import Comment from './Comment'

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
  
 export default Post