import { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils/api';
import Comments from './Comments';
import CommentAdder from './CommentAdder';
import NotFound from './NotFound';

const CommentCard = ({ articleId }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setError] = useState(null);

    useEffect(() => {
        getCommentsByArticleId(articleId)
            .then((commentsFromApi) => {                
                setComments(commentsFromApi);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })
    }, [articleId]);

    if (err?.response?.status === 404 || err?.response?.status === 400) {
        return (
            <NotFound message={err.response.data.msg}/>
        );
    }

    return (
        <div>
            <CommentAdder article_id={ articleId } setComments={setComments}  setIsLoading={setIsLoading}/>
            <Comments comments={comments} setComments={setComments} isLoading={isLoading} />
        </div>
    );
};

export default CommentCard;