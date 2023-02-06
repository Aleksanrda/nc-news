import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticle } from '../utils/api';

const SingleArticle = () => {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({});

    useEffect(() => {
        getArticle(article_id)
            .then((article) => {
                setSingleArticle(article);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [article_id]);

    return (
        <div key={singleArticle?.article_id}>
            <h2>{singleArticle?.title}</h2>
            <h3>{singleArticle?.topic}</h3>
            <h3>{singleArticle?.author}</h3>
            <h4>{singleArticle?.body}</h4>
            <h5>{singleArticle?.created_at}</h5>
            <h6>{singleArticle?.votes}</h6>
            <h6>{singleArticle?.comment_count}</h6>
            <img src={singleArticle?.article_img_url} alt=""></img>
        </div>
    );
};

export default SingleArticle;