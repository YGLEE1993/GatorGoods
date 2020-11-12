import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/views/About/About";
import YG from "./Components/views/About/Individual/YG";
import Joy from "./Components/views/About/Individual/Joy";
import Keith from "./Components/views/About/Individual/Keith";
import Trenton from "./Components/views/About/Individual/Trenton";
import NewListing from "./Components/views/NewListing/NewListing";
import Dashboard from "./Components/dashboard/Dashboard";
import Home from "./Components/Home";
import Books from "./Components/Books";
import Furniture from "./Components/Furniture";
import Electronics from "./Components/Electronics";
import Other from "./Components/Other";
import Result from "./Components/Result";
import ProductListing from "./Components/ProductListing";
import Auth from "./Components/views/UI/AuthModal/AuthModal";
import SearchResults from "./Components/views/Testing/SearchResults";
import Navigation from "./Components/views/Navigation/Navigation";

export default function Routes() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/yg" component={YG} />
        <Route exact path="/about/joy" component={Joy} />
        <Route exact path="/about/keith" component={Keith} />
        <Route exact path="/about/trenton" component={Trenton} />
        <Route exact path="/searchresults" component={SearchResults} />
        <Route exact path="/newListing" component={NewListing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/furniture" component={Furniture} />
        <Route exact path="/electronics" component={Electronics} />
        <Route exact path="/other" component={Other} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/productlisting" component={ProductListing} />
        <Route path="/authentication" component={Auth} />
      </Switch>
    </Router>
  );
}
