import React from 'react'
import { Card, Col, Row } from "react-bootstrap";
import "./ListingCard.css"


export default function ListingCard () {
    return (
        <div>
            <Card className="listingcard">
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
                </Card.Body>
            </Card>
        </div>
    )
}
