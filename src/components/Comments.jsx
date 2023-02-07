import { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils/api';

const Comments = ({ article_id }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsByArticleId(article_id)
            .then((comments) => {
                setComments(comments);
            })
    }, [article_id]);

    console.log(comments);

    return (
        <div className='comments'>
            <h2>Comments</h2>
            {comments?.map(comment => {
                return (
                    <div key={comment.comment_id}>
                        <p>{comment.body}</p>
                        <h3>{comment.author}</h3>
                        <h4>{comment.votes}</h4>
                        <h5>{comment.created_at}</h5>
                    </div>
                );
            })}
        </div>
    );
};

export default Comments;