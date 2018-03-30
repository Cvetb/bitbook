import React from "react";

const UserInfo = props => {
  console.log(props);

  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <div className="card-panel ">
          <img alt="profileImage" width="30%"src={props.profile.avatarUrl} />
          <h5>{props.profile.name}</h5>
          <p> {props.profile.about}</p>
          <div className="chip">
            <img src="" alt="" className="teal" />
            {props.profile.postsCount} posts
          </div>
          <div className="chip">
            {/* <span className="teal">A</span> */}
            <img src="" alt="" className="teal" />
            {props.profile.commentsCount} comments
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
