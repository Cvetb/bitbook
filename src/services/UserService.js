import User from '../entities/User';
class UserService {
fetchUsers(){
    return fetch("http://bitbookapi.azurewebsites.net/api/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        }
        })
    
        .then((response) => response.json())
        .then((userList) => userList.map((user) => new User(user)))
       
    }
       



fetchUser(id){
    return fetch(`http://bitbookapi.azurewebsites.net/api/users/${id}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Key": "bitbook" ,
            "SessionId" : "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        }
    })
    
    .then((response)=> response.json())
    
    .then((user)=> new User(user))

    
}
}


export const userService = new UserService();
