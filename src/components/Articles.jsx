import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Container, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const { topic } = useParams();
    const [sortBy, setSortBy] = useState("article_id");
    const options = [
        "votes",
        "created_at",
        "title",
        "author",    
    ];

    useEffect(() => {
        getArticles(topic, sortBy)
            .then((articles) => {
                setArticles(articles);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [topic, sortBy]);

    const handleSortBy = (option) => {
        setSortBy(option);
    }

    return (
        <div>
            <Dropdown onSelect={handleSortBy} className="sort-item">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {options.map((option => {
                        return (
                            <Dropdown.Item eventKey={option} key={option}>{option}</Dropdown.Item>
                        );
                    }))}
                </Dropdown.Menu>
            </Dropdown>
            <Container className="grid-container">
                {articles.map(article => {
                    return (
                        <ArticleCard article={article} key={article.article_id}/>
                    );
                })}
            </Container>
        </div>
    )
};

export default Articles;