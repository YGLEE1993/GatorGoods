import React, { useState } from "react";
import { Container, CardDeck, CardGroup, Card, Col, Row, DropdownButton, Dropdown, Button, Form } from "react-bootstrap";
import "./Category.css"
import Filter from "./Filter";
import Featured from "./Featured"

export default function Home() {
  return (
    <div>
      <Featured />
      <Container style={{marginTop: "2rem", paddingLeft: 0, paddingRight: 0}}>
          <Col>
              <Row>
                  <Col><h3>Books</h3></Col>
                  <Col lg={7}><p>45 listings for this category</p></Col>
                  <Col  className="text-right">
                    <DropdownButton id="dropdown-basic-button" variant="secondary" title="Sort by">
                      <Dropdown.Item href="#/action-2">Latest</Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Price: low to high</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Price: high to low</Dropdown.Item>
                    </DropdownButton>
                  </Col>
              </Row>
              <Row>
                <Col>
                  <Filter />
                </Col>
                <Col lg={10}>
                  <CardGroup className="cardgroup">
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
                  </CardGroup>
                  <CardGroup className="cardgroup">
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
                  </CardGroup>
                </Col>
              </Row>
          </Col>
      </Container>
    </div>
  );
}
