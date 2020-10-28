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
import Home from "./Components/Home";
import Category from "./Components/Category";
import Result from "./Components/Result";
import ProductListing from "./Components/ProductListing";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/yg" component={YG} />
        <Route exact path="/about/joy" component={Joy} />
        <Route exact path="/about/keith" component={Keith} />
        <Route exact path="/about/trenton" component={Trenton} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/newListing" component={NewListing} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/productlisting" component={ProductListing} />
      </Switch>
    </Router>
  );
}
