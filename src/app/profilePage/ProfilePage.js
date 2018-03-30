import React, { Component } from "react";
import { userService } from "../../services/UserService";
import UserInfo from "./UserInfo";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  
  componentDidMount() {
    this.fetchProfile(this.props.match.params.id);
  }

  fetchProfile = (id) => {
    userService.fetchUsers(id).then(myProfile => {
      this.setState({
        user: myProfile
      });
         //console.log(myProfile);
    });
  };

  render() {
    return (
      <div className="row">
        <UserInfo profile={this.state.user} />
      </div>
    );
  }
}

export default Profile;
