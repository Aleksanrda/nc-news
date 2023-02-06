import { Card, ListGroup } from 'react-bootstrap';

const ArticleCard = ({ article }) => {
    return (
        <section key={article.article_id}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.body}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Topic: {article.topic}</ListGroup.Item>
                    <ListGroup.Item>{article.author}</ListGroup.Item>
                    <ListGroup.Item>Date created: {article.created_at}</ListGroup.Item>
                    <ListGroup.Item>Total votes: {article.votes}</ListGroup.Item>
                </ListGroup>
                <Card.Img variant="top" className="d-block w-100" src={article.article_img_url} alt="" />
            </Card>
        </section>
    );
};

export default ArticleCard;