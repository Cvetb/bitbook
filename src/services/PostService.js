import Post from "../entities/Post";
import TextPost from "../entities/TextPost";
import VideoPost from "../entities/VideoPost";
import ImagePost from "../entities/ImagePost";

class PostService {
  fetchPost() {
    return fetch("http://bitbookapi.azurewebsites.net/api/Posts", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Key': 'bitbook',
        'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
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

          } else if (post.type === "video"){
            return new VideoPost(post);
          }
        });
      });
  }
}

export const postService = new PostService();
