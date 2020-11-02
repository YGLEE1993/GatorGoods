import React, { useState } from "react";
import { Container, CardDeck, CardGroup, Card, Col, Row, DropdownButton, Dropdown, Button, Form } from "react-bootstrap";
import "./Category.css"
import Filter from "./Filter";
import Featured from "./Featured"
import ListingCard from "./ListingCard"

export default function Books() {
  return (
    <div>
      <Featured />
      <Container style={{marginTop: "2rem"}}>
          <Col>
              <Row>
                  <Col><h2>Electronics</h2></Col>
                  <Col lg={6}><p>45 listings in this category</p></Col>
                  <Col  className="text-right">
                    <DropdownButton id="dropdown-basic-button" variant="secondary" title="Sort by">
                      <Dropdown.Item href="#/action-2">Latest</Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Price: low to high</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Price: high to low</Dropdown.Item>
                    </DropdownButton>
                  </Col>
              </Row>
              <Row>
                <Col className="filter">
                  <Filter />
                </Col>
                <Col lg={9}>
                    <CardDeck className="justify-content-lg-center">
                        <ListingCard />
                        <ListingCard />
                        <ListingCard />
                        <ListingCard />
                        <ListingCard />
                        <ListingCard />
                        <ListingCard />
                        <ListingCard />
                    </CardDeck>
                </Col>
              </Row>
          </Col>
      </Container>
    </div>
  );
}
