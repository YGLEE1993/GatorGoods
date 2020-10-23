import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./css/Trenton.css";
import placeholer from "../../../assets/placeholder.jpg";

export default function Trenton() {
    return (
        <div className="trenton">
            <Container>
                <Row className="trenton-img-container">
                    <Image className="trenton-img" src={placeholer} roundedCircle />
                </Row>

                <Row className="trenton-textbox">
                    <Col>
                        <h3>Hello! I'm Trenton, nice to meet you!</h3>
                        <br />
                        <p>
                            I'm a full-time student at San Francisco State University studying computer science.
                            When I'm not coding, you can find me driving cars, riding motorcycles, and draining my
                            savings for gas money.
                        </p>
                    </Col>
                    <Button
                        className="trenton-btn"
                        variant="outline-dark"
                        href="https://www.linkedin.com/in/trenton-smith/"
                    >
                        Connect with Me
                    </Button>
                </Row>
            </Container>
        </div>
    );
}
