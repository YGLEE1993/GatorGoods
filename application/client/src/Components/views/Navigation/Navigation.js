import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <div>
      <Navbar className="navigation-bar">
        <Navbar.Brand style={{ marginLeft: "40px" }} href="/">
          T E A M 8
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link style={{ marginRight: "40px" }} href="/newListing">
            Create Listing
          </Nav.Link>
          <Nav.Link style={{ marginRight: "40px" }} href="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
