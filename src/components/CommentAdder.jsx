import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { postComment } from "../utils/api";
import { useContext } from 'react';
import { UserContext } from "../contexts/UserContext";

const CommentAdder = ({ article_id, setComments, setIsLoading, isReadOnly, setIsReadOnly }) => {
    const userValue = useContext(UserContext);
    const { loggedInUser } = userValue;
    const [newComment, setNewComment] = useState("");


    const postNewComment = () => {
        const userComment = {
            "username": loggedInUser.username,
            "body": newComment,

        };

        setIsReadOnly(true);
        setIsLoading(false);
        setNewComment("");

        postComment(article_id, userComment)
            .then((comment) => {
                setComments(currentComments => [comment, {...currentComments}]);
            })
            .catch((err) => {
                console.log(err);
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