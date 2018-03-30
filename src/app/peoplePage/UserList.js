import React from 'react';
import UserItem from './UserItem';

const UserList = (props) => {

    return (
       
     
      
       <div className="collection">
       {props.people.map((user) => {
          return (<div  key ={user.id}>
           <UserItem  singleUser={user}/>
        </div>)
       
       })}
         </div>

   
    )
}

export default UserList;