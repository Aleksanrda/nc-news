import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import donut from '../img/donut.png';

const ErrorPage = () => {
    return (
        <div className="non-existent-path">
            <div className="float-child">
                <h1>WHOOPS!</h1>
                <h4>We couldn't find the page you are looking for :(</h4>
                <Button variant="secondary" className='button-path-to-articles'><Link to={`/`} className="path-to-articles">Back to your articles!</Link></Button>
            </div>
            <div className="float-child">
                <img src={donut} alt=""></img>
            </div>
            
        </div>
    );
};

export default ErrorPage;