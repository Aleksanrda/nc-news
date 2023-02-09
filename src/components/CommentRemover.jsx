import { useState } from 'react';
import { deleteComment } from '../utils/api';
import { Button } from 'react-bootstrap';

const CommentRemover = ({ comment, setComments }) => {
    const [isRemoving, setIsRemoving] = useState(false);

    const deleteCurrentComment = (commentId) => {
        setIsRemoving(true);

        deleteComment(commentId)
            .then(() => {
                setComments(currentComments => currentComments.filter(comment => comment.comment_id !== commentId));
                setIsRemoving(false);;
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <Button variant="danger" disabled={isRemoving} onClick={() => deleteCurrentComment(comment.comment_id)}>Delete comment</Button>
    );
};

export default CommentRemover;