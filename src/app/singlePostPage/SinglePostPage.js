import React from 'react';

import CommentList from "./CommentList";
import {commentService} from "../../services/CommentService"


class SinglePostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: []
        }
}
componentDidMount() {
    this.fetchComments(this.props.match.params.id);
}

fetchComments(id) {
    commentService.fetchComment(id)
      .then(commentsAll => {
          this.setState({
              comment: commentsAll
          })
        
      })
    }


    render() {
        return (
            <div>
               <CommentList comment={this.state.comment}/>
            </div>
        )
    }
}

export default SinglePostPage;