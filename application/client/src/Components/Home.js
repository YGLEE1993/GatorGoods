import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  CardDeck,
  Col,
  Row,
  Jumbotron,
  Button,
} from "react-bootstrap";
import "./Home.css";
import Featured from "./Featured";
import ListingCard from "./ListingCard";

export default function Home() {
  const [bookListings, setBookListings] = useState([]);

  useEffect(() => {
    const getListings = () => {
      axios
        .post("/api/search/searchProducts", {
          searchTerm: "",
          category: "book",
        })
        .then((response) => {
          setBookListings(response.data);
        });
    };
    getListings();
  }, []);

  console.log(bookListings);
  return (
    <div>
      <Jumbotron>
        <div className="Jumbotron">
          <h1>Hello, Gators! </h1>
          <p>
            Welcome to the online marketplace specifically designed for
            students, faculty and staff at SFSU.
          </p>
        </div>
      </Jumbotron>
      <Featured bookListings={bookListings} />
      <Container style={{ marginTop: "2rem", paddingLeft: 0, paddingRight: 0 }}>
        <Col>
          <Row>
            <Col lg="auto">
              <h2>Books</h2>
            </Col>
            <Col lg="auto">
              <p>45 listings for this category</p>
            </Col>
            <Col className="text-right">
              <Button variant="secondary" href="/books">
                See more
              </Button>{" "}
            </Col>
          </Row>

          <Row className="card-container">
            <CardDeck className="justify-content-lg-center">
              {bookListings.map((bookListing, i) => (
                <ListingCard key={i} {...bookListing} />
              ))}

              {/* <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard /> */}
            </CardDeck>
          </Row>
        </Col>
      </Container>
    </div>
  );
}
