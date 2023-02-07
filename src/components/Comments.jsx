import { Card } from 'react-bootstrap';

const Comments = ({ comments }) => {
    return (
        <div>
            {comments?.map(comment => {
                return (
                    <Card style={{ width: '25rem' }} className="comments" key={comment.comment_id}>
                        <Card.Header as="h5">{comment.author}</Card.Header>
                        <Card.Body>
                            <Card.Text as="p">{comment.body}</Card.Text>
                            <Card.Title className="text-muted">Votes: {comment.votes}</Card.Title>
                        </Card.Body>
                        <footer><time>{comment.created_at}</time></footer>
                    </Card>
                    )}
                )};
        </div>
    );
};

export default Comments;