import React from "react";
import "./Single.css";
import { commentService } from "../../services/CommentService";
import { postService } from "../../services/PostService";
import CommentList from "./CommentList";
import TextPost from "../feedPage/TextPost";
import VideoPost from "../feedPage/VideoPost";
import ImagePost from "../feedPage/ImagePost";
import AddComment from "./AddComment";

class SinglePostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: [],
      singlePost: {},
      loaded: false,

    };
  }

  componentDidMount() {


    // eslint-disable-next-line
    const sessionId = JSON.parse(sessionStorage.getItem("userInfo")).sessionId;
    this.fetchComments(this.props.match.params.id);
    this.fetchSinglePost(
      this.props.match.params.id,
      this.props.match.params.type
    );
  }

  fetchSinglePost(id, type) {
    postService.singlePost(id, type)
      .then(singlePost => {
        this.setState({
          singlePost,
          loaded: true,

        });
      });
  }

  fetchComments = id => {
    commentService.fetchComment(id).then(commentsAll => {
      this.setState({
        comment: commentsAll
      });
    });
  };

  displayPost = () => {
    if (this.state.singlePost.type === "text") {
      return <TextPost post={this.state.singlePost} />;
    } else if (this.state.singlePost.type === "image") {
      return <ImagePost post={this.state.singlePost} />;
    } else {
      return <VideoPost post={this.state.singlePost} />;
    }

  };

  render() {
    return (
      <div className="container">
        <div >
          {this.state.loaded ? (
            this.displayPost()
          ) : (
              <div className="progress amber lighten-3">
                <div className="indeterminate  amber" />
              </div>
            )}
        </div>
        <div>
          <div>
            <AddComment
              reloadPage={this.fetchComments}
              id={this.props.match.params.id}
            />
            <CommentList comment={this.state.comment} />
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePostPage;
