import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Container, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NotFound from "./NotFound";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const { topic } = useParams();
    const [sortBy, setSortBy] = useState("article_id");
    const options = [
        "votes",
        "date",
        "title",
        "author",    
    ];
    const [orderBy, setOrderBy] = useState("asc");
    const orderByOptions = ["asc", "desc"];
    const [err, setErr] = useState(null);

    useEffect(() => {
        getArticles(topic, sortBy, orderBy)
            .then((articles) => {
                setArticles(articles);
            })
            .catch((err) => {
                console.log(err);
                setErr(err);
            })
    }, [topic, sortBy, orderBy]);

    const handleSortBy = (option) => {
        setSortBy(option === "date" ? "created_at" : option);
    }
    const handleOrderBy = (option) => {
        setOrderBy(option);
    }

    if (err?.response?.status === 404 || err?.response?.status === 400) {
        return (
            <NotFound message={err.response.data.msg}/>
        );
    }

    return (
        <div>
            <Dropdown onSelect={handleSortBy} className="sort-by">
                <Dropdown.Toggle variant="info" id="dropdown-basic">
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
            <Dropdown onSelect={handleOrderBy} className="order-by">
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Order By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {orderByOptions.map((option => {
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