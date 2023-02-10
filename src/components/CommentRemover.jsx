import { useState } from 'react';
import { deleteComment } from '../utils/api';
import { Button } from 'react-bootstrap';
import NotFound from './NotFound';

const CommentRemover = ({ comment, setComments }) => {
    const [isRemoving, setIsRemoving] = useState(false);
    const [err, setError] = useState(null);

    const deleteCurrentComment = (commentId) => {
        setIsRemoving(true);

        deleteComment(commentId)
            .then(() => {
                setComments(currentComments => currentComments.filter(comment => comment.comment_id !== commentId));
                setIsRemoving(false);;
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })
    };

    if (err?.response?.status === 404 || err?.response?.status === 400) {
        return (
            <NotFound message={err.response.data.msg}/>
        );
    }

    return (
        <Button variant="danger" disabled={isRemoving} onClick={() => deleteCurrentComment(comment.comment_id)} className="delete-comment">Delete comment</Button>
    );
};

export default CommentRemover;