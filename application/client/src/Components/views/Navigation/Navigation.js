import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Searchbox from "../../Searchbox";
import logo from "../../assets/logo.png";
import axios from "axios";

export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("/api/auth/authenticate").then(async (response) => {
      await setIsLoggedIn(response.data.loggedIn);
    });
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  // const handleLogout = () => {
  //   axios.get("/api/auth/logout").then((response) => {
  //     console.log(response);
  //   });
  // };

  return (
    <div>
      <Navbar className="navigation-bar" variant="light">
        <Navbar.Brand style={{ marginLeft: "2rem" }} href="/">
          <img src={logo} width="150" height="40" alt="logo" />
        </Navbar.Brand>
        <Nav.Item style={{ marginLeft: "2rem" }}>
          <Searchbox />
        </Nav.Item>
        {isLoggedIn ? (
          <Nav className="ml-auto">
            <Nav.Link style={{ marginRight: "2rem" }} href="/newListing">
              Create Listing
            </Nav.Link>
            <Nav.Link style={{ marginRight: "2rem" }} href="/dashboard">
              DashBoard
            </Nav.Link>
            {/* <Nav.Link style={{ marginRight: "2rem" }} onClick={handleLogout}>
              Logout
            </Nav.Link> */}
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Nav.Link style={{ marginRight: "40px" }} href="/login">
              Login
            </Nav.Link>
          </Nav>
        )}

        {/* <Nav className="ml-auto">
          <Nav.Link style={{ marginRight: "2rem" }} href="/newListing">
            Create Listing
          </Nav.Link>
          <Nav.Link style={{ marginRight: "2rem" }} href="/dashboard">
            DashBoard
          </Nav.Link>
          <Nav.Link style={{ marginRight: "2rem" }} href="/login">
            Login
          </Nav.Link>
        </Nav> */}
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
          <Nav.Link style={{ marginRight: "40px" }} href="./other">
            Other
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
