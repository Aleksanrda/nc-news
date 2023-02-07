import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Container } from 'react-bootstrap';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
            .then((articles) => {
                setArticles(articles);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <Container className="grid-container">
            {articles.map(article => {
                return (
                    <ArticleCard article={article}/>
                );
            })}
        </Container>
    )
};

export default Articles;