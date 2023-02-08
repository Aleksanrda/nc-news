import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';

const NavigationBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((topicsFromAPI) => {
        setTopics(topicsFromAPI);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


    return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>NC-News</Navbar.Brand>
      <Container className="navigation-bar">
      <Nav className="me-auto">
        <Link to="/" className="navigation-link">All topics</Link>
        </Nav>
      {topics.map(topic => {
        return (
          <Nav.Item key={topic.slug}>
          <Link to={`/topics/${topic.slug}`} className="navigation-link">{topic.slug} </Link>
          </Nav.Item>
        );
      })}
      </Container>
    </Navbar>
    );
};

export default NavigationBar;