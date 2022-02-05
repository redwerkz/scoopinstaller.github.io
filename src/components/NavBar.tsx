import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = (): JSX.Element => {
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          ScoopSearch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/apps">
              Apps
            </Nav.Link>
            <Nav.Link as={Link} to="/buckets">
              Buckets
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/ScoopSearch">
              <FaGithub size="1.2em" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default React.memo(NavBar);
