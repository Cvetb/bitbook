import React from "react";
import M from "materialize-css";

const ImagePost = props => {
  const { post } = props;

  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <div className="card">
          
            <img alt="" width="100%" src={post.imageUrl} />
            <div className="card-action">
            <a className="left">{post.type} Post</a>
            <a className="right">{post.postComments} Comments</a>
          </div>
          </div>
         
        </div>
      </div>
    
  );
};

export default ImagePost;
