import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Searchbox from "../../Searchbox"

export default function Navigation() {
  return (
    <div>
      <Navbar className="navigation-bar" variant="light">
        <Navbar.Brand style={{ marginLeft: "40px" }} href="/">
          T E A M 8
        </Navbar.Brand>
        <Nav.Item style={{marginLeft: "40px"}}>
          <Searchbox />
        </Nav.Item>
        <Nav className="ml-auto">
          <Nav.Link style={{ marginRight: "40px" }} href="/newListing">
            Create Listing
          </Nav.Link>
          <Nav.Link style={{ marginRight: "40px" }} href="/">
            Log in
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar style={{marginLeft: "33px", paddingTop: "0px"}}>
        <Nav className="mr-auto">
          <Nav.Link style={{ marginRight: "40px" }} href=" ">Books</Nav.Link>
          <Nav.Link style={{ marginRight: "40px" }} href=" ">Furniture</Nav.Link>
          <Nav.Link style={{ marginRight: "40px" }} href=" ">Electronics</Nav.Link>
          <Nav.Link style={{ marginRight: "40px" }} href=" ">Others</Nav.Link>
          <Nav.Link style={{ marginRight: "40px" }} href="/about">About Team</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
