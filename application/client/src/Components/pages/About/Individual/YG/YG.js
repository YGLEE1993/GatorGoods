import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./YG.css";
import placeholer from "../../../../assets/placeholder.jpg";
export default function YG() {
  return (
    <div className="yg">
      <Container>
        <Row className="yg-img-container">
          <Image className="yg-img" src={placeholer} roundedCircle />
        </Row>

        <Row className="yg-textbox">
          <Col>
            <h3>Hi, I am YG, nice to meet you!</h3>
            <br/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Button
            className="yg-btn"
            variant="outline-dark"
            href="/"
          >
            Connect with Me
          </Button>
        </Row>
      </Container>
    </div>
  );
}
