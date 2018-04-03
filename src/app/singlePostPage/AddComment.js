import React from 'react';
import { commentService } from '../../services/CommentService';
import { postService } from "../../services/PostService";

class addComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        };
    }

    componentDidMount() {

    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    clickHandler = () => {
        commentService.newComment(this.state.inputValue, this.props.id)
            .then(response => {
                this.props.reloadPage(this.props.id);
            })
    }

    deletePosts = id => {
       return  postService.deletePost(this.props.id)
        
        .then(response => {
          if (response) {
            window.location = "/";
          }
        });
      };

    render() {
        return (
            <div className="row">
             
                <form className="col s12">
                    <div className="row">
                   
                        <div className="input-field">
                            <input placeholder="Add Comment" id="first_name" type="text" className="validate col m10" value={this.state.inputValue} onChange={this.handleInputChange} />
                            <span className="btn-floating btn-large" onClick={this.clickHandler}><i className="large material-icons left">send</i></span>
                            <a class="btn-floating btn-large waves-effect waves-light red right" onClick={this.deletePosts}><i class="material-icons">delete</i></a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
} 


export default addComment;