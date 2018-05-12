import React, { Component } from "react";
import M from "materialize-css";
import { userService } from "../../services/UserService";

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myName: "",
      about: "",
      avatarUrl: '',
      newAvatarUrl: ''
    };
  }

  componentDidMount() {
    var element = document.querySelector("#modal1");
    M.Modal.init(element);
  }


  handleInputChange = event => {
    switch (event.target.name) {
      case "image": this.setState({ avatarUrl: event.target.value });
        break;
      case "myName": this.setState({ myName: event.target.value });
        break;
      case "about": this.setState({ about: event.target.value });
        break;
      default: this.setState({ newAvatarUrl: event.target.value });
        break;
    }
  };

  clickHandler = (event) => {

  };

  /*userService.editProfile(this.state.myName, this.state.about, " ", " ", this.state.avatarUrl)
      .then((response) => {
         
          this.setState({
              myName: '',
              about: '',
              avatarUrl: ''
          })
          if (response) {
            window.location = "/profile";
          }
})
   
  };
*/

  render() {

    return (
      <div>
        <p
          className="waves-effect waves-light btn modal-trigger blue darken-4"
          href="#modal1"

        >
          <i className="material-icons left">edit</i> Edit profile
        </p>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <div className="file-field input-field col s6">
              <div className="btn blue darken-4 ">
                <span>UPLOAD PHOTO</span>
                <input type="file" />
              </div>
              <div className="file-path-wrapper">
                <input name="image" className="file-path" type="text" onChange={this.handleInputChange} />
              </div>
            </div>

            <input name="imageUrl" type="text" placeholder="Image url" onChange={this.handleInputChange} value={this.state.imageUrlInput} />
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="input_text"
                  type="text"
                  data-length="10"
                  name="myName"
                  onChange={this.handleInputChange}
                  value={this.state.myName}
                />
                <label htmlFor="input_text">Full Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="textarea2"
                  className="materialize-textarea"
                  name="about"
                  onChange={this.handleInputChange}
                  value={this.state.about}
                  data-length="120"
                />
                <label htmlFor="textarea2">Description</label>
              </div>
            </div>
            <div className="modal-footer">
              <p className="modal-action  waves-effect waves-light btn left blue darken-4" onClick={this.clickHandler}>
                <i className="material-icons left">done</i>Update
              </p>
              <p className="modal-action modal-close waves-effect waves-light btn right red">
                <i className="material-icons left">highlight_off</i>Cancel
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
