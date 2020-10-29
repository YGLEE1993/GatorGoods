import React, { useState } from "react";
import { Container, CardDeck, Card, Col, Row, Jumbotron, Button } from "react-bootstrap";
import "./Home.css"
import Featured from "./Featured"


export default function Home() {
  return (
    <div>
        <Jumbotron className="Jumbotron">
            <div style={{paddingLeft: "10rem"}}>
                <h1>Hello, Gators! </h1>
                <p>
                    Welcome to the online marketplace specifically designed and limited to students, faculty and staff at SFSU.
                </p>
            </div>
        </Jumbotron>
        
        <Featured />

        <Container style={{marginTop: "2rem", paddingLeft: 0, paddingRight: 0}}>
            <Col>
                <Row>
                    <Col><h3>Books</h3></Col>
                    <Col lg={7}><p>45 listings for this category</p></Col>
                    <Col className="text-right">
                        <Button variant="secondary" href="/category">See more</Button>{' '}
                    </Col>
                </Row>
                <Row style={{marginTop: '2rem', marginLeft: '1rem', marginRight: '1rem', paddingBottom: '1rem'}}>
                    <CardDeck style={{paddingBottom: '1rem'}}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Listing title</Card.Title>
                                <Card.Text>
                                    <Row className='price-condition'>
                                        <Col>$10</Col>
                                        <Col lg="auto">Very Good</Col>
                                    </Row>
                                </Card.Text>
                                <Card.Text>This is a description of the product.</Card.Text>
                                <Button variant="primary"><i class="fas fa-angle-double-right"></i> &nbsp; See Details</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Listing title</Card.Title>
                                <Card.Text>
                                    <Row className="price-condition">
                                        <Col>$10</Col>
                                        <Col lg="auto">Very Good</Col>
                                    </Row>
                                </Card.Text>
                                <Card.Text>This is a description of the product.</Card.Text>
                                <Button variant="primary"><i class="fas fa-angle-double-right"></i> &nbsp; See Details</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Listing title</Card.Title>
                                <Card.Text>
                                    <Row className="price-condition">
                                        <Col>$10</Col>
                                        <Col lg="auto">Very Good</Col>
                                    </Row>
                                </Card.Text>
                                <Card.Text>This is a description of the product.</Card.Text>
                                <Button variant="primary"><i class="fas fa-angle-double-right"></i> &nbsp; See Details</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Listing title</Card.Title>
                                <Card.Text>
                                    <Row className="price-condition">
                                        <Col>$10</Col>
                                        <Col lg="auto">Very Good</Col>
                                    </Row>
                                </Card.Text>
                                <Card.Text>This is a description of the product.</Card.Text>
                                <Button variant="primary"><i class="fas fa-angle-double-right"></i> &nbsp; See Details</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Listing title</Card.Title>
                                <Card.Text>
                                    <Row className="price-condition">
                                        <Col>$10</Col>
                                        <Col lg="auto">Very Good</Col>
                                    </Row>
                                </Card.Text>
                                <Card.Text>This is a description of the product.</Card.Text>
                                <Button variant="primary"><i class="fas fa-angle-double-right"></i> &nbsp; See Details</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Listing title</Card.Title>
                                <Card.Text>
                                    <Row className="price-condition">
                                        <Col>$10</Col>
                                        <Col lg="auto">Very Good</Col>
                                    </Row>
                                </Card.Text>
                                <Card.Text>This is a description of the product.</Card.Text>
                                <Button variant="primary"><i class="fas fa-angle-double-right"></i> &nbsp; See Details</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Listing title</Card.Title>
                                <Card.Text>
                                    <Row className="price-condition">
                                        <Col>$10</Col>
                                        <Col lg="auto">Very Good</Col>
                                    </Row>
                                </Card.Text>
                                <Card.Text>This is a description of the product.</Card.Text>
                                <Button variant="primary"><i class="fas fa-angle-double-right"></i> &nbsp; See Details</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Listing title</Card.Title>
                                <Card.Text>
                                    <Row className="price-condition">
                                        <Col>$10</Col>
                                        <Col lg="auto">Very Good</Col>
                                    </Row>
                                </Card.Text>
                                <Card.Text>This is a description of the product.</Card.Text>
                                <Button variant="primary"><i class="fas fa-angle-double-right"></i> &nbsp; See Details</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Row>
            </Col>
        </Container>
    </div>
  );
}
