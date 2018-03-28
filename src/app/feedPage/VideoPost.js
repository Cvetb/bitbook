import React from "react";
//import M from "materialize-css";

const VideoPost = props => {
  const { post } = props;

  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <div className="card">
          
          <iframe width="560" height="315" src={post.videoUrl} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            
        
          <div className="card-action ">
            <a className="left">{post.type} Post</a>
            <a className="right">{post.postComments} Comments</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPost;
