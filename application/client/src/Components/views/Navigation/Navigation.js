import React, { useState, useEffect } from "react";
import { Navbar, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import Searchbox from "../../Searchbox";
import logo from "../../assets/logo.png";
import axios from "axios";
import AuthModal from "../UI/AuthModal/AuthModal";
import { MdAdd } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

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
      <Navbar expand="lg" className="navigation-bar" variant="light">
        <Navbar.Brand style={{ marginLeft: "2rem" }} href="/">
          <img src={logo} width="150" height="40" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ marginLeft: "2rem" }}>
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
          <Nav.Item className="ml-auto" style={{ marginLeft: "1rem" }}>
          <Searchbox />
        </Nav.Item>
        {/*{isLoggedIn ? (*/}
        {/*  <Nav className="ml-auto">*/}
        {/*    <Nav.Link style={{ marginRight: "2rem" }} href="/newListing">*/}
        {/*      Create Listing*/}
        {/*    </Nav.Link>*/}
        {/*    <Nav.Link style={{ marginRight: "2rem" }} href="/dashboard">*/}
        {/*      DashBoard*/}
        {/*    </Nav.Link>*/}
        {/*    /!* <Nav.Link style={{ marginRight: "2rem" }} onClick={handleLogout}>*/}
        {/*      Logout*/}
        {/*    </Nav.Link> *!/*/}
        {/*  </Nav>*/}
        {/*) : (*/}
        {/*  <Nav className="ml-auto">*/}
        {/*    <Nav.Link style={{ marginRight: "40px" }} href="/login">*/}
        {/*      Login*/}
        {/*    </Nav.Link>*/}
        {/*  </Nav>*/}
        {/*)}*/}

          <Nav className="ml-auto">
            <Nav.Link style={{ marginRight: "1rem" }} href="/newListing">
              <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      Create a Listing
                    </Tooltip>
                  }
              >
                <MdAdd size="2rem" color="grey"/>
              </OverlayTrigger>
            </Nav.Link>
            {isLoggedIn ? (
                    <Nav.Link
                        style={{marginRight: "40px"}}
                        href="/dashboard"
                    >
                      <OverlayTrigger
                          key="bottom"
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              My Dashboard
                            </Tooltip>
                          }
                      >
                        <MdAccountCircle size="2rem" style={{color: "#8943f6"}}/>
                      </OverlayTrigger>
                    </Nav.Link>
                ) : (
                <Nav.Link
                    style={{marginRight: "40px"}}
                    href="/login"
                >
                  <OverlayTrigger
                      key="bottom"
                      placement="bottom"
                      overlay={
                        <Tooltip>
                          Log in / Sign up
                        </Tooltip>
                      }
                  >
                    <MdAccountCircle size="2rem" color="grey"/>
                  </OverlayTrigger>
                </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>


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

      {/* <Navbar expand="lg" style={{ marginLeft: "50px", paddingTop: "0px" }}>
        <Nav className="mr-auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
          </Navbar.Collapse>
        </Nav>
      </Navbar>
      <AuthModal modal={modalShow} />; */}
    </div>
  );
}
