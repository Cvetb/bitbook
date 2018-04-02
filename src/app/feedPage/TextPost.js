import React from "react";
import { Link } from "react-router-dom";

const TextPost = props => {
  const { post } = props;

  return ( 
    <div  className="row">
      <div className="col s12">
        <div className="card">
          <br/>
            {post.text};
            <div className="card-action ">
              <p className="left"> <Link to={`/TextPosts/${post.postId}`}>{post.type} Post</Link></p>
              <p className="right"><Link to={`/TextPosts/${post.postId}`}>{post.postComments} Comments</Link></p>
            </div>
          </div>
        </div>
      </div>
      
  
  );
};

export default TextPost;
