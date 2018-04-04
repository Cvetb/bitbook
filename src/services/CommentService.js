import Comment from '../entities/Comment'
import { SERVER_KEY } from '../shared/constants';

class CommentService {
    fetchComment(id, sessionId) {
      return fetch(`http://bitbookapi.azurewebsites.net/api/Comments?postId=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Key": SERVER_KEY,
          "SessionId": sessionId
         
        }
      })
      .then((response) => response.json())
      .then((comments) => comments.map(comment => {
        return new Comment(comment);
      }))
    }
  
    
    newComment(data, id, sessionId) {
        return fetch('http://bitbookapi.azurewebsites.net/api/Comments', {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Key": SERVER_KEY,
          "SessionId": sessionId
         
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