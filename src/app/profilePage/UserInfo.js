import React from "react";

const UserInfo = (props) => {
  //console.log(props);

return (
    <div className="row">
    <div className="col s12 m8 offset-m2">
      <div className="card-panel ">
      <img alt="profileImage" src={props.profile.avatarUrl}/>
        <h5 >{props.profile.name}</h5>
        <p> {props.profile.about}</p>
        <a className="waves-effect waves-light btn col s2 m2 offset-m3"><i className="material-icons left">question_answer</i>{props.profile.postsCount}posts</a>
        <a className="waves-effect waves-light btn col s2 m2 offset-m1"><i className="material-icons left">insert_comment</i>{props.profile.commentsCount}comments</a>
      <br/>
    </div>
    </div>
  </div>
)
}
export default UserInfo;