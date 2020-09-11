import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/pages/About/About";
import Landing from "./Components/pages/Landing/Landing";
import YG from "./Components/pages/About/Individual/YG";
import Joy from "./Components/pages/About/Individual/Joy";
import Keith from "./Components/pages/About/Individual/Keith";
import Trenton from "./Components/pages/About/Individual/Trenton";




export default class Routes extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <div>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/about/yg" component={YG} />
                    <Route exact path="/about/joy" component={Joy} />
                    <Route exact path="/about/keith" component={Keith} />
                    <Route exact path="/about/trenton" component={Trenton} />
                    </div>
                </Switch>
            </Router>
        )
    }
}