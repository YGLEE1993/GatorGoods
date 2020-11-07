import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Searchbox from "../../Searchbox";
import logo from "../../assets/logo.png";
import AuthModal from "../UI/AuthModal/AuthModal";

export default function Navigation() {
  return (
    <div>
      <Navbar className="navigation-bar" variant="light">
        <Navbar.Brand style={{ marginLeft: "40px" }} href="/">
          <img src={logo} width="150" height="40" alt="logo" />
        </Navbar.Brand>
        <Nav.Item style={{ marginLeft: "40px" }}>
          <Searchbox />
        </Nav.Item>
        <Nav className="ml-auto">
          <Nav.Link style={{ marginRight: "40px" }} href="/newListing">
            Create Listing
          </Nav.Link>
          <Nav.Link style={{ marginRight: "40px" }} href="/authentication">
            Log in
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar style={{ marginLeft: "50px", paddingTop: "0px" }}>
        <Nav className="mr-auto">
          <Nav.Link style={{ marginRight: "40px" }} href="./books">
            Books
          </Nav.Link>
          <Nav.Link style={{ marginRight: "40px" }} href="./furniture">
            Furniture
          </Nav.Link>
          <Nav.Link style={{ marginRight: "40px" }} href="./electronics">
            Electronics
          </Nav.Link>
          <Nav.Link style={{ marginRight: "40px" }} href="./others">
            Others
          </Nav.Link>
          <Nav.Link style={{ marginRight: "40px" }} href="/about">
            About Team
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
