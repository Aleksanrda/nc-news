import error from '../img/error.avif';

const NotFound = ({ message }) => {
    return (
            <div className="not-found">
                <section className="not-found-message">
                    <h2>{message}</h2>
                </section>
                <img src={error} alt="not found"/>
            </div>
    );
};

export default NotFound;