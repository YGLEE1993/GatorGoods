import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/pages/About/About";
import Landing from "./Components/pages/Landing/Landing";
import YG from "./Components/pages/About/Individual/YG/YG";
import Joy from "./Components/pages/About/Individual/Joy/Joy";
import Keith from "./Components/pages/About/Individual/Keith/Keith";
import Trenton from "./Components/pages/About/Individual/Trenton/Trenton";
import Navigation from "./Components/pages/Navigation/Navigation";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/yg" component={YG} />
          <Route path="/joy" component={Joy} />
          <Route path="/keith" component={Keith} />
          <Route path="/trenton" component={Trenton} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
