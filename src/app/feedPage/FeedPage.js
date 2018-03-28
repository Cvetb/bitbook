import React, { Component } from "react";
import { postService } from "../../services/PostService";
import TextPost from "./TextPost";
import VideoPost from "./VideoPost";
import ImagePost from "./ImagePost";

class FeedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    postService
      .fetchPost()

      .then(postData => {
        console.log(postData);
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
            return <ImagePost post={post} />;
          } else {
            
            return <VideoPost post={post} />;
          }
        })}
      </div>
    );
  }
}

export default FeedPage;
