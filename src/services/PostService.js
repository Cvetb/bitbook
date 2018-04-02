import Post from "../entities/Post";
import TextPost from "../entities/TextPost";
import VideoPost from "../entities/VideoPost";
import ImagePost from "../entities/ImagePost";

class PostService {

  fetchPost() {
    return fetch("http://bitbookapi.azurewebsites.net/api/Posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Key": "bitbook",
        "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result.map(post => {
          if (post.type === "text") {
            return new TextPost(post);
          } else if (post.type === "image") {
            return new ImagePost(post);
          } else if (post.type === "video") {
            return new VideoPost(post);
          }
        });
      });
  }

  newTextPost(text) {
    return fetch("http://bitbookapi.azurewebsites.net/api/TextPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": "bitbook",
        "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
      },
      body: JSON.stringify({
        text: text
      })
    }).then(response => response.json());
    
  }

  newImagePost(imageUrl) {
    return fetch("http://bitbookapi.azurewebsites.net/api/ImagePosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": "bitbook",
        "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
      },
      body: JSON.stringify({
        imageUrl: imageUrl
      })
    }).then(response => response.json());
    
  }


  newVideoPost(videoUrl) {
    return fetch("http://bitbookapi.azurewebsites.net/api/VideoPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": "bitbook",
        "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
      },
      body: JSON.stringify({
        videoUrl: videoUrl
      })
    }).then(response => response.json());
    
  }

  singlePost(id){
    return fetch(`http://bitbookapi.azurewebsites.net/api/Posts/${id}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Key": "bitbook",
          "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
      }
      
  })
      .then((response) => response.json())
      .then((postItem) => new Post (postItem))
  }


  singleImagePost(id){
    return fetch(`http://bitbookapi.azurewebsites.net/api/ImagePosts/${id}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Key": "bitbook",
          "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
      }
      
  })
      .then((response) => response.json())
      .then((postItem) => new ImagePost(postItem))
  }

  
  singleVideoPost(id){
    return fetch(`http://bitbookapi.azurewebsites.net/api/VideoPosts/${id}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Key": "bitbook",
          "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
      }
      
  })
      .then((response) => response.json())
      .then((postItem) => new VideoPost(postItem))
  }
}


export const postService = new PostService();
