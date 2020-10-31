import React from 'react'
import { Container, CardDeck, Card } from "react-bootstrap";

export default function Featured() {
    return (
        <div>
            <Container style={{marginTop: "2rem"}}>
                <h2>Featured Categories</h2>
                <CardDeck style={{padding: "2rem"}}>
                    <Card style={{border: 0}}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Books</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{border: 0}}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Furniture</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{border: 0}}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Electronics</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{border: 0}}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Others</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    )
}
