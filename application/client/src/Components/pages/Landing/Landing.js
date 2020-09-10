import React from "react";
import { Row, Col, Container, Button} from "react-bootstrap";

export default function Landing() {
    return (
        <section className="landing-header">
        <Container>
          <Row>
            <Col>
                <h1>Landing</h1>
                <Button variant="outline-dark" href="/about">About Us</Button>
            </Col>
          </Row>
        </Container>
      </section>
    )
}
