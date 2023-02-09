import { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils/api';
import Comments from './Comments';
import CommentAdder from './CommentAdder';

const CommentCard = ({ articleId }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCommentsByArticleId(articleId)
            .then((commentsFromApi) => {                
                setComments(commentsFromApi);
                setIsLoading(false);
            })
    }, [articleId]);

    console.log(comments);

    return (
        <div>
            <CommentAdder article_id={ articleId } setComments={setComments}  setIsLoading={setIsLoading}/>
            <Comments comments={comments} setComments={setComments} isLoading={isLoading} />
        </div>
    );
};

export default CommentCard;