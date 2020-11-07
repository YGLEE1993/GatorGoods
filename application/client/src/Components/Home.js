import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  CardDeck,
  Card,
  Col,
  Row,
  Jumbotron,
  Button,
} from "react-bootstrap";
import "./Home.css";
import Featured from "./Featured";
import ListingCard from "./ListingCard";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [bookListings, setBookListings] = useState([]);
  const [furnitureListings, setFurnitureListings] = useState([]);
  const [electronicsListings, setElectronicsListings] = useState([]);
  const [othersListings, setOthersListings] = useState([]);
  const history = useHistory();

  const handleBooks = () => {
    history.push("/books", {
      productListings: bookListings,
    });
  };


  useEffect(() => {
    // const getListings = () => {
        axios
            .post("/api/search/searchProducts", {
            searchTerm: "",
            category: "book",
            })
            .then((response) => {
            setBookListings(response.data);
            });

        axios
            .post("/api/search/searchProducts", {
            searchTerm: "",
            category: "furniture",
            })
            .then((response) => {
            setFurnitureListings(response.data);
            });


        axios
            .post("/api/search/searchProducts", {
                searchTerm: "",
                category: "electronic",
            })
            .then((response) => {
                setElectronicsListings(response.data);
            });

        axios
            .post("/api/search/searchProducts", {
            searchTerm: "",
            category: "others",
            })
            .then((response) => {
            setOthersListings(response.data);
            });
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
      <Featured productListings={bookListings} />
      <Container>
   
        {/* Books */}
        <Container className="category-title">
          <Row className="text-left">
            <Col lg="auto">
              <h2>Books</h2>
            </Col>
            <Col lg="auto">
              <p>{bookListings.length} listings in this category</p>
            </Col>
            <Col className="text-right">
              <Button variant="secondary" onClick={handleBooks}>
                See more
              </Button>{" "}
            </Col>
          </Row>
          <Row className="card-container">
            <Container>
                <CardDeck className="justify-content-lg-center">
                {bookListings.map((bookListing, i) => (
                    <ListingCard key={i} {...bookListing} />
                ))}
                </CardDeck>
            </Container>
          </Row>
          </Container>

        {/* Furniture */}
        <Container className="category-title">
            <Row className="category-title"  className="text-left">
            <Col lg="auto">
              <h2>Furniture</h2>
            </Col>
            <Col lg="auto">
              <p>{furnitureListings.length} listings in this category</p>
            </Col>
            <Col className="text-right">
              <Button variant="secondary" href="/furniture">
                See more
              </Button>{" "}
            </Col>
          </Row>
          <Row className="card-container">
            <Container>
                <CardDeck className="justify-content-lg-center">
                {furnitureListings.map((furnitureListing, i) => (
                    <ListingCard key={i} {...furnitureListing} />
                ))}
                </CardDeck>
            </Container>
          </Row>
        </Container>

        {/* Furniture */}
        <Container className="category-title">
            <Row className="category-title"  className="text-left">
            <Col lg="auto">
              <h2>Electronics</h2>
            </Col>
            <Col lg="auto">
              <p>{electronicsListings.length} listings in this category</p>
            </Col>
            <Col className="text-right">
              <Button variant="secondary" href="/electronics">
                See more
              </Button>{" "}
            </Col>
          </Row>
          <Row className="card-container">
            <Container>
                <CardDeck className="justify-content-lg-center">
                {electronicsListings.map((electronicsListing, i) => (
                    <ListingCard key={i} {...electronicsListing} />
                ))}
                </CardDeck>
            </Container>
          </Row>
        </Container>
        
        {/* Others */}
        <Container className="category-title">
            <Row className="category-title"  className="text-left">
            <Col lg="auto">
              <h2>Others</h2>
            </Col>
            <Col lg="auto">
              <p>{othersListings.length} listings in this category</p>
            </Col>
            <Col className="text-right">
              <Button variant="secondary" href="/others">
                See more
              </Button>{" "}
            </Col>
          </Row>
          <Row className="card-container">
            <Container>
                <CardDeck className="justify-content-lg-center">
                {othersListings.map((othersListing, i) => (
                    <ListingCard key={i} {...othersListing} />
                ))}
                </CardDeck>
            </Container>
          </Row>
        </Container>

      </Container>
    </div>
  );
}
