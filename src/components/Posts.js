import React from 'react'

import Comment from './MainPage/Comment'

const Posts = () => {
    
}



class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    render() {
      return (
        <div className="card">
          <div className="title">{this}</div>
          <div className="description">Description</div>
          <Comment />
        </div>
      );
    }
  }
  
 export default Post