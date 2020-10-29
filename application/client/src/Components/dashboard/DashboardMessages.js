import React from "react";
import { Tab, ListGroup, Row, Col } from "react-bootstrap";

export default function DashboardMessages() {
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row style={{paddingTop: "2.5rem"}}>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#offer1">
                            Listing Title | BuyerName | Contact Info
                        </ListGroup.Item>
                        <ListGroup.Item action href="#offer2">
                            Listing Title | BuyerName | Contact Info
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#offer1">
                            <p>
                                Just pretend you are a whisper floating across a mountain. You can do it. We artists
                                are a different breed of people. We're a happy bunch. I will take some magic white,
                                and a little bit of Vandyke brown and a little touch of yellow. Talk to trees, look at
                                the birds. Whatever it takes.

                                The little tiny Tim easels will let you down. We don't really know where this goes -
                                and I'm not sure we really care. You can get away with a lot. Play with the angles.
                                Every time you practice, you learn more. Trees grow however makes them happy. Once you
                                learn the technique, ohhh! Turn you loose on the world; you become a tiger. Let's make
                                some happy little clouds in our world.
                            </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#offer2">
                            <p>
                                You need to have a very firm paint to do this. Exercising the imagination,
                                experimenting with talents, being creative; these things, to me, are truly the windows
                                to your soul. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent
                                Red, and a little bit of Prussian Blue. You've got to learn to fight the temptation to
                                resist these things. Just let them happen. It just happens - whether or not you worried
                                about it or tried to plan it. We wash our brush with odorless thinner. Maybe, just to
                                play a little, we'll put a little tree here. Just let go - and fall like a little
                                waterfall.

                                You have to allow the paint to break to make it beautiful. Be so very light. Be a
                                gentle whisper. And right there you got an almighty cloud. Use what you see, don't
                                plan it.
                            </p>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}