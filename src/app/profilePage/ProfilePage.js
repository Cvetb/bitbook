import React, { Component } from "react";
import { userService } from "../../services/UserService";
import UserInfo from "./UserInfo";
import Header from '../partials/Header';
import Footer from '../partials/Footer';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  
  componentDidMount() {
    this.fetchProfile(this.props.match.params.id);
  }

  fetchProfile = (id) => {
    userService.fetchUser(id).then(myProfile => {
      this.setState({
        user: myProfile
      });
         //console.log(myProfile);
    });
  };

  render() {
    return (
      <div className="row">
      <Header />
        <UserInfo profile={this.state.user} />
        <Footer/>
      </div>
    );
  }
}

export default Profile;
