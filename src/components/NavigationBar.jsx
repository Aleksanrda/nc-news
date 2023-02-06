import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>NC-News</Navbar.Brand>
      <Container>
      <Nav className="me-auto">
        <Nav.Link href="/">All articles</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    );
};

export default NavigationBar;