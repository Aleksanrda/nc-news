import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NotFound from "./NotFound";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const { topic } = useParams();
    const [err, setErr] = useState(null);

    useEffect(() => {
        getArticles(topic)
            .then((articles) => {
                setArticles(articles);
            })
            .catch((err) => {
                console.log(err);
                setErr(err);
            })
    }, [topic]);

    if (err?.response?.status === 404 || err?.response?.status === 400) {
        return (
            <NotFound message={err.response.data.msg}/>
        );
    }

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