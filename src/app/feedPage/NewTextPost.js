import React from 'react';
import M from "materialize-css"

class NewTextPost extends React.Component {


    componentDidMount() {
        var elem = document.querySelector('#modal1');
        M.Modal.init(elem);
    }

    render() {
        return (

            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>New Text Post</h4>
                    <div className="row">
                            <div className="input-field col s12">
                                <input type="url" className="validate" />
                                <label className="active" for="text">Input Text</label>
                            </div>
                        </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action waves-effect waves-green btn-flat">Post</a>
                    <a className="modal-action modal-close waves-effect waves-green btn left">Cancel</a>
                </div>
            </div>


        )
    }
}

export default NewTextPost;