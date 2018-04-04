import React, { Component } from "react";
import { userService } from "../../services/UserService";
import UserInfo from "./UserInfo";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  
  componentDidMount() {
    const sessionId = JSON.parse(sessionStorage.getItem('userInfo')).sessionId;
    this.fetchProfile(this.props.match.params.id, sessionId);
  }

  fetchProfile = (id, sessionId) => {
    userService.fetchUser(id, sessionId).then(myProfile => {
      this.setState({
        user: myProfile
      });
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
