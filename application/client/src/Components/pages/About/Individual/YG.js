import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./css/YG.css";
import placeholder from "../../../assets/Stock_img.png";

export default function YG() {
  return (
    <div className="yg">
      <Container>
        <Row className="yg-img-container">
          <Image className="yg-img" src={placeholder} roundedCircle />
        </Row>

        <Row className="yg-textbox">
          <Col>
            <h3>Hi, I am YG, nice to meet you!</h3>
            <br />
            <p>
              I am a senior student majoring in Computer Science at San
              Francisco State University. I was first fascinated by how one’s
              writing (coding languages) can take shape and for people to use
              them in daily life and now I am passionate about learning
              full-stack development. In my free time, I enjoy photography and
              listening to music. My goal is to be a great full-stack developer
              and use my skills to support women and the LGBTQ community into
              STEM fields.
            </p>
          </Col>
          <Button
            className="yg-btn"
            variant="outline-dark"
            href="https://www.linkedin.com/in/yg-lee/"
          >
            Connect with Me
          </Button>
        </Row>
      </Container>
    </div>
  );
}
