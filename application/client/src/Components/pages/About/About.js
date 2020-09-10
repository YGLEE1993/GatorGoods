import React from "react";
import { Jumbotron, Button, Card, Container, Row, Col } from "react-bootstrap";
import "./About.css";
import placeholder from "../../assets/placeholder.jpg";
import axios from 'axios';

export default function About() {
  const allDevs = [];

  React.useEffect(()=>{
    fetchDevs();
  }, [])
  
  const fetchDevs = () => {
    axios.get('/api/developer')
    .then( (res) => {
      for(let i = 0; i < res.data.length; i++){
        allDevs.push(res.data[i])
      }
      console.log(allDevs)
    })
  }
  
  return (
    <div>
      <Jumbotron className="about-banner">
        <h2>Software Engineering class SFSU</h2>
        <br />
        <h5>Fall 2020</h5>
        <h5>Team 8</h5>
      </Jumbotron>

      <Container>
        <Row>
          <Col lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <span className="card-subtext">TEAM MASTER</span>
                <Card.Title>Keith Eastman</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-dark" href="/keith">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
              <span className="card-subtext">Backend Master</span>
                <Card.Title>Yugyeong (YG) Lee </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-dark" href="/yg">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
              <span className="card-subtext">Frontend Master</span>
                <Card.Title>Zhuozhuo (Joy) Liu</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-dark" href="/joy">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
              <span className="card-subtext">Github Master</span>
                <Card.Title>Trenton Smith</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-dark" href="/trenton">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
