import React from 'react';


const CommentItem = (props) => {
    
    return (
        <div>
        <div className="collection">
        <ul className="collection-item avatar" >
            <li>
                <img className="circle" alt="" src=""/>
                <p>{props.singleComment.body}</p>
            </li>
            </ul>
        </div>
        </div>
    )
}

export default CommentItem;