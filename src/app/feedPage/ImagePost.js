import React from "react";
import {Link} from "react-router-dom"

const ImagePost = props => {
  const { post } = props;

  return (
    
    <div className="row">
      <div className="col s12">
        <div className="card">
          
            <img alt="" width="100%" src={post.imageUrl} />
            <div className="card-action">
            <p className="left"><Link to = {`/ImagePosts/${post.postId}`}>{post.type} Post</Link></p>
            <p className="right"><Link to = {`/ImagePosts/${post.postId}`}>{post.postComments} Comments</Link></p>
          </div>
          </div>
         
        </div>
      </div>
      
    
  );
};

export default ImagePost;
