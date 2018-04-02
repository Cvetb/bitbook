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
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field">
                            <input placeholder="Add Comment" id="first_name" type="text" className="validate" value={this.state.inputValue} onChange={this.handleInputChange} />
                            <button className="waves-effect waves-light btn" onClick={this.clickHandler}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


export default addComment;