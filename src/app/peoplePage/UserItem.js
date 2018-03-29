import React, { Component } from 'react';

const UserList = (props) => {

    return (
        
<div className="collection-item avatar">
      <img src={props.singleUser.avatarUrl} alt="" className="circle"/>
      <span className="title">{props.singleUser.name}</span>
      <p>{props.singleUser.aboutShort}</p>
    </div>
      
    )
}
    export default UserList;