import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <Navbar className="navigation-bar">
        <Navbar.Brand style={{marginLeft: '40px'}} href="/">T E A M 8</Navbar.Brand>
        <Nav className="ml-auto">
        <Nav.Link  style={{marginRight: '40px'}} as={Link} to="/about">
          About us
        </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
