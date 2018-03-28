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
  newTextPost(post) {
    return fetch("http://bitbookapi.azurewebsites.net/api/TextPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": "bitbook",
        "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
      },
      body: JSON.stringify({
        text: post.text,
        postId: post.id
      })
    }).then(response => response.json());
    
  }

  newImagePost(post) {
    return fetch("http://bitbookapi.azurewebsites.net/api/ImagePosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": "bitbook",
        "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
      },
      body: JSON.stringify({
        imageUrl: post.imageUrl,
        postId: post.id
      })
    }).then(response => response.json());
    
     
  }
  newVideoPost(post) {
    return fetch("http://bitbookapi.azurewebsites.net/api/VideoPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": "bitbook",
        "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
      },
      body: JSON.stringify({
        videoUrl: post.videoUrl,
        postId: post.id
      })
    }).then(response => response.json());
    
  }
}


export const postService = new PostService();
