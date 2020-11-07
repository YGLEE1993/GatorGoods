import React, { useState } from "react";
import {
  Container,
  CardDeck,
  Col,
  Row,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./Category.css";
import Filter from "./Filter";
import Featured from "./Featured";
import ListingCard from "./ListingCard";

export default function Books(props) {
  console.log(props.location.state.productListings);
  return (
    <div>
      <Featured />
      <Container style={{ marginTop: "2rem" }}>
        <Col>
          <Row>
            <Col>
              <h2>Books</h2>
            </Col>
            <Col lg={6}>
              <p>45 listings in this category</p>
            </Col>
            <Col className="text-right">
              <DropdownButton
                id="dropdown-basic-button"
                variant="secondary"
                title="Sort by"
              >
                <Dropdown.Item href="#/action-2">Latest</Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Price: low to high
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Price: high to low
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
          <Row>
            <Col className="filter">
              <Filter />
            </Col>
            <Col lg={9}>
              <CardDeck className="justify-content-lg-center">
                <CardDeck className="justify-content-lg-center">
                  {props.location.state.productListings.map((productListing, i) => (
                    <ListingCard key={i} {...productListing} />
                  ))}
                </CardDeck>
              </CardDeck>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}
