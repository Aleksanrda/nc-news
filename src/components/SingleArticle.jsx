import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticle } from '../utils/api';
import { Button } from 'react-bootstrap';
import { patchVotes } from '../utils/api';
import { Spinner } from 'react-bootstrap';
import CommentCard  from './CommentCard';
import NotFound from './NotFound';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const SingleArticle = () => {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [isArticleLoading, setIsArticleLoading] = useState(true);
    const [votes, setVotes] = useState(0);
    const [err, setError] = useState(null);

    useEffect(() => {
        getArticle(article_id)
            .then((articleFromApi) => {
                setSingleArticle(articleFromApi);
                setVotes(articleFromApi.votes);
                setIsArticleLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })
    }, [article_id]);
    
    const updateVotes = (vote) => {
        setVotes(currentVotes => currentVotes + vote);

        patchVotes(article_id, {inc_votes: vote})
            .then((article) => {
            }).catch((err) => {
                setVotes(currentVotes => currentVotes - vote);
            });
    };

    if (err?.response?.status === 404 || err?.response?.status === 400) {
        return (
            <NotFound message={err.response.data.msg} />
        );
    }

    if (isArticleLoading) {
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          );
    }

    return (
        <MDBContainer>
            <MDBRow className='mb-1'>
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
            </MDBRow>
            <CommentCard articleId={singleArticle?.article_id}/>
        </MDBContainer>
    );
};

export default SingleArticle;