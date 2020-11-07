import React from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import Searchbox from "../../Searchbox";
import logo from "../../assets/logo.png";

export default function Navigation() {
  return (
    <div>
      <Navbar className="navigation-bar" variant="light">
        <Navbar.Brand style={{ marginLeft: "2rem" }} href="/">
          <img src={logo} width="150" height="40" alt="logo" />
        </Navbar.Brand>
        <Nav.Item style={{ marginLeft: "2rem" }}>
          <Searchbox />
        </Nav.Item>
        <Nav className="ml-auto">
          <Nav.Link style={{ marginRight: "2rem" }} href="/newListing">
            Create Listing
          </Nav.Link>
          <Nav.Link style={{ marginRight: "2rem" }} href="/">
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



//     <Nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <Button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </Button>

//   <div class="collapse navbar-collapse" id="navbarColor03">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home
//           <span class="sr-only">(current)</span>
//         </a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Features</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Pricing</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">About</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
//         <div class="dropdown-menu">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <a class="dropdown-item" href="#">Something else here</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Separated link</a>
//         </div>
//       </li>
//     </ul>
//     <Form class="form-inline my-2 my-lg-0">
//       <Form class="form-control mr-sm-2" type="text" placeholder="Search" />
//       <Button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</Button>
//     </Form>
//   </div>
// </Nav>
  );
}
