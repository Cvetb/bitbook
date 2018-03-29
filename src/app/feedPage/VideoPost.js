import React from "react";
//import M from "materialize-css";

const VideoPost = props => {
  const { post } = props;

  const feedVideo = (props) =>{
    let videoLink = props.post.videoUrl;
    
    if (!videoLink.includes("embed")){
        videoLink = videoLink.replace("watch?v=", "embed/")
        }
    }


  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <div className="card">
          
          <iframe width="560" height="315" src={post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            
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
