import User from '../entities/User';
import { SERVER_KEY } from '../shared/constants';

class UserService {
fetchUsers(sessionId){
    return fetch("http://bitbookapi.azurewebsites.net/api/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Key": SERVER_KEY,
            "SessionId": sessionId
        }
        })
    
        .then((response) => response.json())
        .then((userList) => userList.map((user) => new User(user)))
       
    }
       



fetchUser(id, sessionId){
    return fetch(`http://bitbookapi.azurewebsites.net/api/users/${id}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Key": SERVER_KEY,
            "SessionId": sessionId
        }
    })
    
    .then((response)=> response.json())
    
    .then((user)=> new User(user))

    
}
}


export const userService = new UserService();
