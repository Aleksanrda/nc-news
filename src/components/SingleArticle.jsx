import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticle } from '../utils/api';
import Comments from './Comments';
import { getCommentsByArticleId } from '../utils/api';
import { Button } from 'react-bootstrap';
import { patchVotes } from '../utils/api';
import CommentAdder from './CommentAdder';
import { Spinner } from 'react-bootstrap';

const SingleArticle = () => {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [comments, setComments] = useState([]);
    const [isArticleLoading, setIsArticleLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [votes, setVotes] = useState(0);
    const [isReadOnly, setIsReadOnly] = useState(false);

    useEffect(() => {
        getArticle(article_id)
            .then((articleFromApi) => {
                setSingleArticle(articleFromApi);
                setVotes(articleFromApi.votes);
                setIsArticleLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [article_id]);

    useEffect(() => {
        getCommentsByArticleId(article_id)
            .then((commentsFromApi) => {
                setComments(commentsFromApi);
                setIsLoading(false);
                setIsReadOnly(false);
            })
    }, [article_id, comments, isLoading]);
    
    const updateVotes = (vote) => {
        setVotes(currentVotes => currentVotes + vote);

        patchVotes(article_id, {inc_votes: vote})
            .then((article) => {
            }).catch((err) => {
                setVotes(currentVotes => currentVotes - vote);
            });
    };

    if (isArticleLoading) {
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          );
    }

    return (
        <div>
            <article key={singleArticle?.article_id} className="single-article">
                <div className="article-body">
                    <h2>{singleArticle?.title}</h2>
                    <img src={singleArticle?.article_img_url} alt=""></img>
                    <h5>written by {singleArticle?.author} | {singleArticle?.topic}</h5>
                    <p>{singleArticle?.body}</p>
                    <time>{singleArticle?.created_at}</time>
                </div>
                <div className='vote-buttons'>
                    <Button variant="secondary" onClick={() => updateVotes(-1)} className="dislike">Dislike</Button>
                        <span className="votes">
                        Votes: {votes}
                        </span>
                    <Button variant="secondary" onClick={() => updateVotes(1)} className="like">Like</Button>
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
            </article>
            <CommentAdder article_id={singleArticle?.article_id} setComments={setComments} setIsLoading={setIsLoading} isReadOnly={isReadOnly} setIsReadOnly={setIsReadOnly}/>
            <Comments comments={comments} isLoading={isLoading}/>
        </div>
    );
};

export default SingleArticle;