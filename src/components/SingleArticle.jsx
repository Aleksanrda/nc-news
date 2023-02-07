import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticle } from '../utils/api';
import Comments from './Comments';
import { getCommentsByArticleId } from '../utils/api';

const SingleArticle = () => {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        Promise.all([getArticle(article_id), getCommentsByArticleId(article_id)])
            .then(([articleFromApi, commentsFromApi]) => {
                setSingleArticle(articleFromApi);
                setComments(commentsFromApi);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [article_id]);

    return (
            <article key={singleArticle?.article_id} className="single-article">
                <h2>{singleArticle?.title}</h2>
                <img src={singleArticle?.article_img_url} alt=""></img>
                <h5>written by {singleArticle?.author} | {singleArticle?.topic}</h5>
                <p>{singleArticle?.body}</p>
                <time>{singleArticle?.created_at}</time>
                <h6>Votes: {singleArticle?.votes}</h6>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            </article>
            <Comments comments={comments} />
    );
};

export default SingleArticle;