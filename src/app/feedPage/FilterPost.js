import React, { Component } from "react";
import M from "materialize-css";

const FilterPost = props => {
  return (
    <div>
      <br />
      <a class='dropdown-trigger btn'  data-target='dropdown2'><i class="material-icons right">arrow_drop_down</i>All posts</a>
      <br/>
      <ul id='dropdown2' class='dropdown-content'>

        <li onClick={props.allPosts} >All posts</li>
        <li onClick={() => props.filter("video")}>Videos</li>
        <li onClick={() => props.filter("image")}>Images</li>
        <li onClick={() => props.filter("text")}>Text</li>
      </ul>
    </div>

 
        
  );
};

export default FilterPost;
