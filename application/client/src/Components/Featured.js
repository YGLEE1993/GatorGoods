import React from 'react'
import { Container, CardDeck, Card } from "react-bootstrap";

export default function Featured() {
    return (
        <div>
            <Container style={{marginTop: "2rem", paddingLeft: 0, paddingRight: 0}}>
                <h3>Featured Categories</h3>
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
