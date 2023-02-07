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
        <div>
            {articles.map(article => {
                return (
                    <section key={article.article_id}>
                        <h2>{article.title}</h2>
                        <h3>{article.topic}</h3>
                        <h3>{article.author}</h3>
                        <p>{article.body}</p>
                        <h6>{article.created_at}</h6>
                        <h3>Votes: {article.votes}</h3>
                        <img src={article.article_img_url} alt=""></img>
                    </section>
                );
            })}
        </div>
    )
};

export default Articles;