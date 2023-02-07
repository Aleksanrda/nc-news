const Comments = ({ comments }) => {
    console.log(comments);

    return (
        <div className='comments'>
            <h2>Comments</h2>
            {comments?.map(comment => {
                return (
                    <div key={comment.comment_id}>
                        <h5>{comment.author}</h5>
                        <p>{comment.body}</p>
                        <time>{comment.created_at}</time>
                        <h6>Votes: {comment.votes}</h6> 
                    </div>
                );
            })}
        </div>
    );
};

export default Comments;