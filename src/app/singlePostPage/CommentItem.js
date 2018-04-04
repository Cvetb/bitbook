import React from 'react';


const CommentItem = (props) => {
    return (
        <div className="">
      
        <div className="collection">
        
        <ul className="collection-item avatar">
        <div>
        <li>
        <img className="circle" width="50%" alt="avatar" src="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-boy-389cd1eb1d503149-512x512.png"/></li>
            <li>
           
                
                <h5>{props.singleComment.authorName}</h5>
                <span className="secondary-content">{props.singleComment.dateCreated}</span>
                <br/>
                <p>{props.singleComment.body}</p>
                <br/>
                
            </li>
            </div>
            </ul>
        </div>
       
        </div>
    )
}

export default CommentItem;