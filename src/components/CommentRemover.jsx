import { useState } from 'react';
import { deleteComment } from '../utils/api';
import { Button } from 'react-bootstrap';

const CommentRemover = ({ commentId }) => {
    const [isRemoving, setIsRemoving] = useState(false);

    const deleteCurrentComment = (commentId) => {
        setIsRemoving(true);
        deleteComment(commentId)
            .then(() => {
                setIsRemoving(false);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <Button variant="danger" disabled={isRemoving} onClick={() => deleteCurrentComment(commentId)}>Delete comment</Button>
    );
};

export default CommentRemover;