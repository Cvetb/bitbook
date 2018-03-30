import React, { Component } from "react";
import { userService } from "../../services/UserService";
import UserList from "./UserList";
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import SearchBar from './Search';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            inputValue: '',
            filteredUsers: []
        }
}
componentDidMount() {
  
    this.fetchPeople();
    
}

fetchPeople() {
    userService.fetchUsers()
      .then(usersAll => {
         
          this.setState({
              userList: usersAll,
              filteredUsers: usersAll
        
          })
        
      })
    }

    handleChange = (event) => {
		this.setState({
			filteredUsers: this.state.userList.filter(el => {
				return el.name.indexOf(event.target.value) !== -1;
			}),
			inputValue: event.target.value
		});
	}


render() {
   
    return (
        <div>
            <Header />
            <div className="row">
            <SearchBar  handleChange={this.handleChange} inputValue={this.state.inputValue}/>
            <UserList people={this.state.filteredUsers}/>
            </div>
            <Footer />
            </div>
                
            
       
    )
}
}



export default People;