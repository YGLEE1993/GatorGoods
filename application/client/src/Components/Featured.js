import React from "react";
import { Container, CardDeck, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Feature.css";
import furniture from "./assets/furniture.jpeg";
import book from "./assets/book.jpeg";
import electronics from "./assets/electronics.jpeg";
import others from "./assets/others.jpeg";

export default function Featured(props) {
  const history = useHistory();

  function handleBook(e) {
    e.preventDefault()
    history.push("/books")
  }
  function handleFurniture() {
    history.push("/furniture");
  }
  function handleElectronics() {
    history.push("/electronics")
  }
  function handleOther() {
    history.push("/other")
  }

  return (
    <div>
      <Container style={{ marginTop: "2rem" }}>
        <h2>Featured Categories</h2>
        <CardDeck style={{ padding: "2rem" }}>
          <Card onClick={handleBook} style={{ border: 0 }} className="category-card">
            <Card.Img variant="top" src={book} />
            <Card.Body>
              <Card.Title>Books</Card.Title>
            </Card.Body>
          </Card>
          <Card onClick={handleFurniture} style={{ border: 0 }} className="category-card">
            <Card.Img variant="top" src={furniture} />
            <Card.Body>
              <Card.Title>Furniture</Card.Title>
            </Card.Body>
          </Card>
          <Card onClick={handleElectronics} style={{ border: 0 }} className="category-card">
            <Card.Img variant="top" src={electronics} />
            <Card.Body>
              <Card.Title>Electronics</Card.Title>
            </Card.Body>
          </Card>
          <Card onClick={handleOther} style={{ border: 0 }} className="category-card">
            <Card.Img variant="top" src={others} />
            <Card.Body>
              <Card.Title>Other</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
}
