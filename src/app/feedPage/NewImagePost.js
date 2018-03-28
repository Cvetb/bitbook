import React from 'react';
import M from "materialize-css"

class NewImagePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            success: null,
            error: null
        }

    }

    componentDidMount() {
        const elem = document.querySelector('#modal2');
        M.Modal.init(elem);
    }

    handleInputChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    CheckUrl = () => {
        const input = this.state.input
        const ext = input.substring(input.lastIndexOf('.') + 1);
        console.log(ext)
        if (ext === "gif" || ext === "GIF" || ext === "JPEG" || ext === "jpeg" || ext === "jpg" || ext === "JPG" || ext === "doc") {
            this.setState({ success: "Success", error: null })
            // return document.getElementById("labelImage").setAttribute("data-success", "Success");
        }
        else {
            this.setState({ success: null, error: "Enter Valid URL" })
            // return document.getElementById("labelImage").setAttribute("data-error", "Enter Valid URL");
        }
    }

    render() {
        return (
            <div>
                <div id="modal2" className="modal">
                    <div className="modal-content">
                        <h4>New Image Post</h4>
                        <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="inputimg"
                                    type="text"
                                    value={this.state.input}
                                    onChange={this.handleInputChange}
                                     />
                                <label id="labelImage" className="active" htmlFor="inputimg">
                                    Image Url
                                    </label>
                                    <p>{this.state.success}</p>
                                    <p id="error">{this.state.error}</p>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action waves-effect waves-green btn" onClick={this.CheckUrl}>Post</a>
                        <a className="modal-action modal-close waves-effect waves-green btn left">Cancel</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewImagePost;