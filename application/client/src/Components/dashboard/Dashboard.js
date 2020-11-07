import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import DashboardListings from "./DashboardListings";
import DashboardMessages from "./DashboardMessages";
import AuthModal from "../views/UI/AuthModal/AuthModal";

export default function Dashboard() {
  return (
    <Container className="dashboard container" style={{ marginTop: "2rem" }}>
      <h3>My Dashboard</h3>
      <Container style={{ paddingTop: "2rem" }}>
      <Tabs
        defaultActiveKey="listings"
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="listings" title="Listings">
          <DashboardListings />
        </Tab>
        <Tab eventKey="messages" title="Messages">
          <DashboardMessages />
        </Tab>
      </Tabs>
      </Container>
      <AuthModal />
    </Container>
  );
}
