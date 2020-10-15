import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./css/Keith.css";
import keithImg from "../../../assets/Keith.png";

export default function Keith() {
 return (
  <div className="keith">
   <Container>
    <Row className="keith-img-container">
     <Image className="keith-img" src={keithImg} />
    </Row>
    <Row className="keith-textbox">
     <Col>
      <h1>"Software is a lever that moves the modern world"</h1>
      <h3>Keith Eastman, Team lead</h3>
      <br />
      <p>
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
      </p>
     </Col>
     <Button
         className="keith-btn"
         variant="outline-dark"
         href="https://www.linkedin.com/in/eastmankeith/">
            Connect with Me
     </Button>
    </Row>
   </Container>
  </div>
 )
}
