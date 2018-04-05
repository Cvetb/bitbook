import React from "react";
import { Link } from "react-router-dom";

const UserItem = props => {
  return (
    <Link to={`/profile/${props.singleUser.userId}`}>
      <div className="collection">
        <div className="collection-item avatar z-depth-4">
          <img src={props.singleUser.avatarUrl} alt="" className="circle" />
          <span className="title">{props.singleUser.name}</span>
          <p>{props.singleUser.aboutShort}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
