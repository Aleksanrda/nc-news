import axios from "axios";

const newsAPI = axios.create({
    baseURL: 'https://news-1a1w.onrender.com/api'
});

export const getArticles = (topic, sortBy, orderBy) => {
    return newsAPI
        .get('/articles', { params: { topic: topic, sort_by: sortBy, order: orderBy }})
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

export const postComment = (articleId, comment) => {
    return newsAPI
        .post(`/articles/${articleId}/comments`, comment)
        .then(({ data }) => {
            console.log("post comment success")
            return data.comment;
        });
}

export const getTopics = () => {
    return newsAPI
        .get('/topics')
        .then(( { data }) => {
            return data.topics;
        })
}

export const deleteComment = (commentId) => {
    return newsAPI
        .delete(`/comments/${commentId}`);
};