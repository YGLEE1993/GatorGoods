import React from "react";
import { Card, CardDeck } from "react-bootstrap";

export default function DashboardListings() {
    return (
        <CardDeck style={{padding: "2.5rem"}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Listing 1</Card.Title>
                    <Card.Text>
                        Let's put a touch more of the magic here. From all of us here, I want to wish you happy
                        painting and God bless, my friends.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Listing 2</Card.Title>
                    <Card.Text>
                        We'll throw some old gray clouds in here just sneaking around and having fun.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Listing 3</Card.Title>
                    <Card.Text>
                        That's a crooked tree. We'll send him to Washington. A big strong tree needs big strong roots.
                        We don't want to set these clouds on fire.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Listing 4</Card.Title>
                    <Card.Text>
                        Just think about these things in your mind and drop em' on canvas. This is unplanned it really
                        just happens.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    );
}