import { Card } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

const Comments = ({ comments, isLoading }) => {
    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          );
    }

    return (
        <div>
            {comments?.map((comment, index) => {
                return (
                    <Card style={{ width: '25rem' }} className="comments" key={index}>
                        <Card.Header as="h5">{comment.author}</Card.Header>
                        <Card.Body>
                            <Card.Text as="p">{comment.body}</Card.Text>
                            <Card.Title className="text-muted">Votes: {comment.votes}</Card.Title>
                        </Card.Body>
                        <footer><time>{comment.created_at}</time></footer>
                    </Card>
                    )}
                )}
        </div>
    );
};

export default Comments;