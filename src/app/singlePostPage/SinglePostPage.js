import React from 'react';

import CommentList from "./CommentList";
import { commentService } from "../../services/CommentService"
import { postService } from "../../services/PostService"
import TextPost from "../feedPage/TextPost"
import VideoPost from "../feedPage/VideoPost"
import ImagePost from "../feedPage/ImagePost"


class SinglePostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: [],
            singlePost: []
        }
    }
    componentDidMount() {
        this.fetchComments(this.props.match.params.id);
        this.fetchSinglePost(this.props.match.params.id);

    }

    fetchSinglePost(id) {
        postService.singlePost(id)
            .then(singlePost => {
                this.setState({
                    singlePost: singlePost
                })
                console.log(singlePost);
                
                
            })
    }

    fetchComments(id) {
        commentService.fetchComment(id)
            .then(commentsAll => {
                this.setState({
                    comment: commentsAll
                })
            
            })
    }

    displayPost = () => {
        if (this.state.singlePost.type === "text") {
            return <TextPost singlePost={this.state.singlePost} />;
        } else if (this.state.singlePost.type === "image") {
            return <ImagePost singlePost={this.state.singlePost} />;
        } else {
            return <VideoPost singlePost={this.state.singlePost} />;
        }
    }

    render() {
        return (
            <div>
            <div>
               {this.displayPost}
            </div>
            <div>
                <CommentList comment={this.state.comment} />
            </div>
            </div>
        )
    }
}

export default SinglePostPage;