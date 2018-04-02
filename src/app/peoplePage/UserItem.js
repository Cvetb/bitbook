import React from 'react';
import { Link } from "react-router-dom";
const UserList = (props) => {

    return (
        
        <Link to={`/peoplePage/${props.singleUser.id}`}>
        <div className="collection">
        <div className="collection-item avatar z-depth-4">
      <img src={props.singleUser.avatarUrl} alt="" className="circle"/>
      <span className="title">{props.singleUser.name}</span>
      <p>{props.singleUser.aboutShort}</p>
    </div>
    </div>
      </Link>
    )
}
    export default UserList;