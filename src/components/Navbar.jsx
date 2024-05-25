import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure this is imported

const MyNavbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/list">
            <Nav.Link>List</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/population">
            <Nav.Link>Population</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/custom-route">
            <Nav.Link>Custom Route</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;
