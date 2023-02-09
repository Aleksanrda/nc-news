import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { postComment } from "../utils/api";
import { useContext } from 'react';
import { UserContext } from "../contexts/UserContext";

const CommentAdder = ({ article_id, setComments, setIsLoading }) => {
    const userValue = useContext(UserContext);
    const { loggedInUser } = userValue;
    const [newComment, setNewComment] = useState("");
    const [isReadOnly, setIsReadOnly] = useState(false);

    const postNewComment = () => {
        const userComment = {
            "username": loggedInUser.username,
            "body": newComment,
        };

        setIsReadOnly(true);
        setIsLoading(true);

        postComment(article_id, userComment)
            .then((comment) => {
                setComments(currentComments => [...comment, ...currentComments]);
                setIsLoading(false);
                setNewComment("");
                setIsReadOnly(false);
            });
    };

    const handleChange = (e) => {
        setNewComment(e.target.value);
    }

    return (
        <Form>
            <fieldset disabled={isReadOnly}>
            <Form.Group>
                <Form.Control as="textarea" rows={4} placeholder="Add a new comment" value={newComment} onChange={handleChange}/>
            </Form.Group>
            <Button variant="warning" onClick={() => postNewComment()}>Submit</Button>
            </fieldset>
        </Form>
    );
};

export default CommentAdder;