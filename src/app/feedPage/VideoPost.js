import React from "react";
import {Link} from "react-router-dom"
//import M from "materialize-css";

const VideoPost = props => {
  const { post } = props;

  // const feedVideo = (props) =>{
  //   let videoLink = props.post.videoUrl;
    
  //   if (!videoLink.includes("embed")){
  //       videoLink = videoLink.replace("watch?v=", "embed/")
  //       }
  //   }


  return (
    
    <div className="row">
      <div className="col s12">
        <div className="card">
          
          <iframe title = "youtube" width="560" height="315" src={post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            
          <div className="card-action ">
            <p className="left"><Link to = {`/VideoPosts/${post.postId}`}>{post.type} Post</Link></p>
            <p className="right"><Link to = {`/VideoPosts/${post.postId}`}>{post.postComments} Comments</Link></p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default VideoPost;
