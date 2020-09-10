import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./Landing.css";

export default function Landing() {
  return (
    <>
      <Jumbotron className="landing-banner">
        <h1>Software Engineering class SFSU</h1>
        <h3>Fall 2020</h3>
        <h3>Team 8</h3>
        <Button className="landing-button"variant="outline-dark" href="/about">
          Meet Our Developers
        </Button>
      </Jumbotron>
    </>
  );
}
