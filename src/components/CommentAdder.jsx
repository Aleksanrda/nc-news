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
    const [ errors, setErrors ] = useState({});

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
            })
            .catch((err) => {
                setIsLoading(false);
                setNewComment("");
                setIsReadOnly(false);
                alert(`Error happened. ${err.response.data.msg}`);
            });
    };

    const findFormErrors = () => {
        const newErrors = {};

        if ( !newComment || newComment === '' ) {
            newErrors.comment = 'Please, input your comment before sending it!';
        }
        else if ( newComment.length > 100 ) {
           newErrors.comment = 'comment is too long!';
        }
    
        return newErrors;
    }

    const handleChange = (e) => {
        setNewComment(e.target.value);

        if ( !!errors["comment"]) {
            setErrors({
                comment: null
            });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = findFormErrors();

        if ( Object.keys(newErrors).length > 0 ) {
            setErrors(newErrors)
          } else {
            postNewComment();
          }

      };

    return (
        <Form onSubmit={handleSubmit}>
            <fieldset disabled={isReadOnly}>
            <Form.Group controlId="validationCustom01">
                <Form.Control as="textarea" rows={4} placeholder="Add a new comment" value={newComment} onChange={e => handleChange(e)} type="text" isInvalid={ !!errors.comment }/>
                <Form.Control.Feedback type='invalid'>
                    { errors.comment }
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="warning" type="submit">Submit</Button>
            </fieldset>
        </Form>
    );
};

export default CommentAdder;