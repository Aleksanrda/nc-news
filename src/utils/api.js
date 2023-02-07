import axios from "axios";

const newsAPI = axios.create({
    baseURL: 'https://news-1a1w.onrender.com/api'
});

export const getArticles = () => {
    return newsAPI
        .get('/articles')
        .then(({ data }) => {
            return data.articles;
        })
}

export const getArticle = (article_id) => {
    return newsAPI
        .get(`/articles/${article_id}`)
        .then(( { data }) => {
            return data.article;
        });
}

export const getCommentsByArticleId = (article_id) => {
    return newsAPI
        .get(`/articles/${article_id}/comments`)
        .then(({ data }) => {
            return data.comments;
        })
};

export const patchVotes = (articleId, body) => {
    return newsAPI
        .patch(`/articles/${articleId}`, body)
        .then(({ data }) => {
            return data.article;
        });
}