import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import DashboardListings from "./DashboardListings";
import DashboardMessages from "./DashboardMessages";
import AuthModal from "../views/UI/AuthModal/AuthModal";

export default function Dashboard() {
  return (
    <Container className="dashboard container" style={{ paddingTop: "5rem" }}>
      <h3>My New Dashboard</h3>
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
      <AuthModal />
    </Container>
  );
}
