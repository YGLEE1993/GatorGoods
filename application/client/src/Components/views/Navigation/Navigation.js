import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Searchbox from "../../Searchbox"
import logo from "../../assets/logo.png"

export default function Navigation() {
  return (
    <div>
      <Navbar className="navigation-bar" variant="light">
        <Navbar.Brand style={{ marginLeft: "40px" }} href="/">
          <img src={logo} width="150" height="40" alt="logo" />
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
      <Navbar style={{marginLeft: "50px", paddingTop: "0px"}}>
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
