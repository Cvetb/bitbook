import Comment from '../entities/Comment'

class CommentService {
    fetchComment(id) {
      return fetch(`http://bitbookapi.azurewebsites.net/api/Comments?postId=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Key": "bitbook",
          "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        }
      })
      .then((response) => response.json())
      .then((comments) => comments.map(comment => {
        return new Comment(comment);
      }))
    }
  
    
    newComment(data, id) {
        return fetch('http://bitbookapi.azurewebsites.net/api/Comments', {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Key": "bitbook",
          "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        },
        body: JSON.stringify({
          "body": data,
          "postId": id
        })
        
       })
      .then((response) => {
        return response.json()
      });
    }
}

export const commentService = new CommentService();