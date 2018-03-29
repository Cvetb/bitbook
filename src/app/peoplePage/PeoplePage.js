import React, { Component } from "react";
import { userService } from "../../services/UserService";
import UserList from "./UserList";

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
}
componentDidMount() {
  
    this.fetchPeople();
    
}

fetchPeople() {
    userService.fetchUsers()
      .then(usersAll => {
         
          this.setState({
              userList: usersAll
        
          })
          console.log(usersAll);
      })
    }

render() {
   
    return (
        
            <div className="row">
            <UserList people={this.state.userList}/>
            </div>
                
            
       
    )
}
}



export default People;