import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const { topic } = useParams();

    useEffect(() => {
        getArticles(topic)
            .then((articles) => {
                setArticles(articles);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [topic]);

    return (
        <Container className="grid-container">
            {articles.map(article => {
                return (
                    <ArticleCard article={article} key={article.article_id}/>
                );
            })}
        </Container>
    )
};

export default Articles;