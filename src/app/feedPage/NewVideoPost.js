import React from 'react';
import M from "materialize-css"

class NewVideoPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
            success: null,
            error: null
        }

    }

    componentDidMount() {
        var elem = document.querySelector('#modal3');
        M.Modal.init(elem);
    }

    handleInputChangeYouTube = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    matchYoutubeUrl = (url) => {
        var input = this.state.input
        var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if (input.match(p)) {
            this.setState({ success: "Success", error: null })
        } else {

            this.setState({ success: null, error: "Enter Valid YouTube URL" })

        }
    }



    render() {
        return (

            <div id="modal3" className="modal">
                <div className="modal-content">
                    <h4>New Video Post</h4>
                    <form>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="videoInput" type="text" value={this.state.input} onChange={this.handleInputChangeYouTube} />
                            <label className="active" htmlFor="videoInput" >YouTube Url</label>
                            <p>{this.state.success}</p>
                            <p id="error">{this.state.error}</p>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a className="modal-action waves-effect waves-green btn-flat" onClick={this.matchYoutubeUrl}>Post</a>
                    <a className="modal-action modal-close waves-effect waves-green btn left">Cancel</a>
                </div>
            </div>


        )
    }
}

export default NewVideoPost;