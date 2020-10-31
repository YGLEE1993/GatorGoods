import React, { useState } from "react";
import { Container, CardDeck, Card, Col, Row, Jumbotron, Button } from "react-bootstrap";
import "./Home.css"
import Featured from "./Featured"
import ListingCard from "./ListingCard"


export default function Home() {
    
    return (
        <div>
            <Jumbotron>
                <div className="Jumbotron">
                    <h1>Hello, Gators! </h1>
                    <p>
                        Welcome to the online marketplace specifically designed for students, faculty and staff at SFSU.
                    </p>
                </div>
            </Jumbotron>
            
            <Featured />

            <Container style={{marginTop: "2rem", paddingLeft: 0, paddingRight: 0}}>
                <Col>
                    <Row >
                        <Col><h3>Books</h3></Col>
                        <Col lg={9}><p>45 listings for this category</p></Col>
                        <Col className="text-right">
                            <Button variant="secondary" href="/category">See more</Button>{' '}
                        </Col>
                    </Row>
                    <Row className="card-container">
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
                    </Row>
                </Col>
            </Container>
        </div>
  );
}