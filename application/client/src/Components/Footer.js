import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container style={{ marginTop: "5rem", marginBottom: "1rem" }}>
      <Row className="justify-content-lg-center">
        <div>
          <footer className="footer">
            <div>
              <a href="./about">CSC 648-848 Global Team</a>
              <span> &copy; 2020</span>
            </div>
          </footer>
        </div>
      </Row>
    </Container>
  );
}
