import React, { Component } from "react";
import { postService } from "../../services/PostService";
import TextPost from "./TextPost";
import VideoPost from "./VideoPost";
import ImagePost from "./ImagePost";
import CreateNewPost from "./CreateNewPost";
import NewTextPost from "./NewTextPost";
import NewVideoPost from "./NewVideoPost";
import NewImagePost from "./NewImagePost";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import FilterPost from "./FilterPost";
import M from "materialize-css";

class FeedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.fetchPosts();
    var elem = document.querySelector('.dropdown-trigger');
  var instance = M.Dropdown.init(elem);
  

  }

  fetchPosts = () => {
    postService.fetchPost().then(postData => {
      this.setState({
        posts: postData,
        filteredPosts: postData
      });
    });
  };

  filterPosts = (postType) => {
    console.log(postType)
    this.setState({
      filteredPosts: this.state.posts.filter(el => {
        return el.type === postType;
      })
    })

  };

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="row">
            <FilterPost filter={this.filterPosts} allPosts={this.fetchPosts}/>
          </div>
          {this.state.filteredPosts.map(post => {
            if (post.type === "text") {
              return <TextPost post={post} />;
            } else if (post.type === "image") {
              return <ImagePost post={post} />;
            } else {
              return <VideoPost post={post} />;
            }
          })}

          <CreateNewPost />
          <NewTextPost reloadPage={this.fetchPosts} />
          <NewImagePost reloadPage={this.fetchPosts} />
          <NewVideoPost reloadPage={this.fetchPosts} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default FeedPage;
