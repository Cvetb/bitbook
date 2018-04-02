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
        <div className="card video-container">
          
          <iframe title = "youtube" width="560" height="315" src={post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          <div className="card-content">
            <p className="left chip"><Link to = {`/VideoPosts/${post.postId}`} className="grey-text text-darken-3">{post.type} Post</Link></p>
            <p className="right chip"><Link to = {`/VideoPosts/${post.postId}`} className="grey-text text-darken-3">{post.postComments} Comments</Link></p>
          <br/>
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default VideoPost;
