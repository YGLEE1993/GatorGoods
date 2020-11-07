import React from "react";
import { Card, CardDeck, Button, Row, Col } from "react-bootstrap";
import DashboardListingCard from "./DashboardListingCard";

export default function DashboardListings() {
    return (
        <CardDeck style={{padding: "2.5rem"}}>
            <DashboardListingCard />
            <DashboardListingCard />
            <DashboardListingCard />
            <DashboardListingCard />
            <DashboardListingCard />
        </CardDeck>
    );
}