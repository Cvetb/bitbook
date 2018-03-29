import React from "react";

const UserInfo = (props) => {
return (
    <div className="row">
    <div className="col s12 m8 offset-m2">
      <div className="card-panel ">
      <img alt="profileImage" src={props.user.avatarUrl}/>
        <h5 >Name Surname{props.user.name}</h5>
        <p> lorem ipsum ....{props.user.about}</p>
        <a className="waves-effect waves-light btn col s2 m2 offset-m3"><i className="material-icons left">question_answer</i>posts</a>
        <a className="waves-effect waves-light btn col s2 m2 offset-m1"><i className="material-icons left">insert_comment</i>comments</a>
      <br/>
    </div>
    </div>
  </div>
)
}
export default UserInfo;