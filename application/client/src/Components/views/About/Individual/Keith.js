import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./css/YG.css";
import keithImg from "../../../assets/Keith.png";

export default function Keith() {
 return (
  <div className="yg">
   <Container>
    <Row>
     <Image className="yg-img" src={keithImg} roundedCircle/>
    </Row>

    <Container className="yg-textbox">
        <Row>
            <Col>
                <h1>"Software is a lever that moves the modern world"</h1>
                <h3>Keith Eastman, Team lead</h3>
            </Col>
        </Row>
        
        <Row className="text-container" >
            <Col lg={{ span: 8, offset: 2 }}>
                I am a senior at San Francisco State finishing 
                my final semester before I graduate with a degree 
                in Computer Science. I wrote my first scrap of
                code in visual basic in a forward aid station in
                Afhganistan to help manage medication inventory
                and reduce the workload for my squad. Since then 
                I have gained ever deeper appreciation for what 
                a powerful force multiplier the right software 
                can be. In my free time I enjoy brewing beer 
                and painting.
            </Col>
        </Row>

        <Row>
            <Col>
                <Button
                    className="yg-btn"
                    variant="primary"
                    href="https://www.linkedin.com/in/eastmankeith/">
                        Connect with Me
                </Button>
            </Col>
        </Row>
   </Container>
   </Container>
  </div>
 )
}
