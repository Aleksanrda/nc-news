import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>NC-News</Navbar.Brand>
      <Container className="navigation-bar">
      <Nav className="me-auto">
        <Link to="/" className="navigation-link">All articles</Link>
      </Nav>
      </Container>
    </Navbar>
    );
};

export default NavigationBar;