import React from "react";
import { Jumbotron, Button, Card, Container, Row, Col } from "react-bootstrap";
import "./About.css";

export default function About() {
  
  return (
    <div>

      <Jumbotron className="about-banner">
        <h1>Software Engineering class SFSU</h1>
        <h3>Fall 2020</h3>
        <h3>Team 8</h3>
        <br />
        <p>
          <Button variant="outline-dark" href="https://github.com/CSC-648-SFSU/csc648-03-fa20-team08">Learn more</Button>
        </p>
      </Jumbotron>

      <Container>
      <Row>    
        <Col lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Keith Eastman</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-dark">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Yugyeong (YG) Lee</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-dark">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Zhuozhuo (Joy) Liu</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-dark">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180"  />
            <Card.Body>
              <Card.Title>Trenton Smith</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-dark">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </div>
  );
}
