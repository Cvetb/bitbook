import React from 'react';
import { commentService } from '../../services/CommentService';


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

    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field">
                            <input placeholder="Add Comment" id="first_name" type="text" className="validate col m10" value={this.state.inputValue} onChange={this.handleInputChange} />
                            <span className="btn-flat btn-large" onClick={this.clickHandler}><i className="large material-icons left">send</i></span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
} 


export default addComment;