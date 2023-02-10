import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="non-existent-path">404</div>
            <Link to={`/`}>Back to your articles!</Link>
        </div>
    );
};

export default ErrorPage;