import React from 'react'
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'

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

  export default Comment