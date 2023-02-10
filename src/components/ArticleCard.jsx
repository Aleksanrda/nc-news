import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
    return (
        <section key={article.article_id}>
            <Card>
            <Card.Img variant="top" className="d-block w-100" src={article.article_img_url} alt="" />   
                <Card.Body>
                    <Card.Title><Link to={`/articles/${article.article_id}`} className="link-to-article">{article.title}</Link></Card.Title> 
                    <Card.Text>{article.body}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{article.topic}</ListGroup.Item>
                    <ListGroup.Item>{article.author}</ListGroup.Item>
                    <ListGroup.Item>{article.created_at}</ListGroup.Item>
                    <ListGroup.Item>Total votes: {article.votes}</ListGroup.Item>
                </ListGroup>
            </Card>
        </section>
    );
};

export default ArticleCard;