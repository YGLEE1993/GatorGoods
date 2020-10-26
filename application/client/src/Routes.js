import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/views/About/About";
import Landing from "./Components/views/Landing/Landing";
import YG from "./Components/views/About/Individual/YG";
import Joy from "./Components/views/About/Individual/Joy";
import Keith from "./Components/views/About/Individual/Keith";
import Trenton from "./Components/views/About/Individual/Trenton";
import Test from "./Components/views/Testing/Test";
import NewListing from "./Components/views/NewListing/NewListing";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/yg" component={YG} />
        <Route exact path="/about/joy" component={Joy} />
        <Route exact path="/about/keith" component={Keith} />
        <Route exact path="/about/trenton" component={Trenton} />
        <Route exact path="/test" component={Test} />
        <Route path="/newListing" component={NewListing} />
      </Switch>
    </Router>
  );
}
