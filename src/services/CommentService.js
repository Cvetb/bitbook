import Comment from '../entities/Comment'
class CommentService {
    fetchComment(id) {
      return fetch(`http://bitbookapi.azurewebsites.net/api/comments?postId=${id}`, {
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
      .then((comments) => comments.map((comment) => new Comment(comment)))
    }
    
    newComment(data) {
        return fetch('http://bitbookapi.azurewebsites.net/api/comments', {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Key": "bitbook",
          "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        },
        body: JSON.stringify(data)
        
       })
      .then((response) => response.json());
    }
}

export const commentService = new CommentService();