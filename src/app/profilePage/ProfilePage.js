import React, { Component } from "react";
import { userService } from "../../services/UserService";
import UserInfo from "./UserInfo";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
}
componentDidMount() {
  
this.fetchProfile();
    
}

fetchProfile = (id) => {
    userService.fetchUser(id)
      .then(myProfile => {
         
          this.setState({
              user: myProfile
        
          })
          console.log(myProfile);
      })
    }

render() {
    if(this.state.user){
    return (
        
            <div className="row">
                <UserInfo user={this.state.user}/>
            </div>
    )
}
}
}


export default Profile;