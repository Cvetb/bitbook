import React, { Component } from "react";
import { postService } from "../../services/PostService";
import TextPost from "./TextPost";
import VideoPost from "./VideoPost";
import ImagePost from "./ImagePost";
import CreateNewPost from "./CreateNewPost"
import NewTextPost from "./NewTextPost"
import NewVideoPost from "./NewVideoPost"
import NewImagePost from "./NewImagePost"


class FeedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    postService
    .fetchPost()

    .then(postData => {
      this.setState({
        posts: postData
      });
    });
  }

  render() {
    const { post } = this.state;

    return (
      <div>
          
        {this.state.posts.map(post => {
          if (post.type === "text") {
            return <TextPost post={post} />;
          } else if (post.type === "image") {
            return <ImagePost post={post}/>;
          } else {
            
            return <VideoPost post={post} />;
          }
        })}

        <CreateNewPost/>
        <NewTextPost reloadPage={this.fetchPosts}/>
        <NewImagePost reloadPage={this.fetchPosts}/>
        <NewVideoPost reloadPage={this.fetchPosts}/>
      </div>
    );
  }
}

export default FeedPage;