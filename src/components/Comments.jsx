import { Card, Spinner } from 'react-bootstrap';
import CommentRemover from './CommentRemover';
import { useContext } from 'react';
import { UserContext } from "../contexts/UserContext";

const Comments = ({ comments, setComments, isLoading }) => {
    const user = useContext(UserContext);
    const { loggedInUser } = user;

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
                        
                        { loggedInUser.username ===  comment.author 
                        ? <CommentRemover comment={comment} setComments={setComments}/> : null }
                    </Card>
                    )}
                )}
        </div>
    );
};


export default Comments;