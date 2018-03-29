import React from 'react';
import M from "materialize-css"
import {postService} from "../../services/PostService"

class NewTextPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        }
    }


    componentDidMount() {
        var elem = document.querySelector('#modal1');
        M.Modal.init(elem);
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    clickHandler = () => {
        postService.newTextPost(this.state.inputValue)
            .then(response => {
                this.props.reloadPage();
            })
    }

    render() {
        return (
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>New Text Post</h4>
                    <div className="row">
                            <div className="input-field col s12">
                                <input id="postValue" type="text" className="validate" value={this.state.inputValue} onChange={this.handleInputChange} />
                                <label className="active" htmlFor="text">Input Text</label>
                            </div>
                        </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.clickHandler}>Post</a>
                    <a className="modal-action modal-close waves-effect waves-green btn left">Cancel</a>
                </div>
            </div>
        )
    }
}

export default NewTextPost;