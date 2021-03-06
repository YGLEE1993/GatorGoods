import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./css/YG.css";
import placeholder from "../../../assets/Stock_img.png";

export default function Trenton() {
    return (
        <div className="yg">
            <Container>
                <Row>
                    <Image className="yg-img" src={placeholder} roundedCircle />
                </Row>

                <Container className="yg-textbox">
                    <Row>
                        <Col>
                            <h3>Hey I'm Trenton Smith, thanks for stopping by!</h3>
                        </Col>
                    </Row>
                    <Row className="text-container" >
                        <Col lg={{ span: 8, offset: 2 }}>
                            I'm a United States Air Force veteran who spent six years forecasting weather and leading
                            highly specialized and diverse teams around the country. After separating from the military,
                            I became a full-time student at San Francisco State University where I'm currently studying
                            computer science. I have a passion for software development and solving real-world problems
                            with technology. When I'm not coding however, you can find me pursuing my other interests:
                            art, music, fitness, sports, sustainable living, and science to name a few. I strive for
                            self-improvement, and fully embrace lifelong learning! Stay kind, love life, and be well!
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button
                                className="yg-btn"
                                variant="outline-dark"
                                href="https://www.linkedin.com/in/trenton-smith/"
                            >
                                Connect with Me
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
