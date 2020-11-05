import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./Dashboard.css";

export default function DashboardListingCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }} className="dashboard-listing-card">    
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Listing 1</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                    <Row className="justify-content-lg-center">
                        <Col lg="4">
                            <Button variant="btn btn-outline-secondary">Edit</Button>
                        </Col>
                        <Col lg="4">
                            <Button variant="secondary">Delete</Button>
                            
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Published on Oct 15, 2020</small>
                </Card.Footer>
            </Card>
        </div>
    )
}
