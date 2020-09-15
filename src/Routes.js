import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Calculator from "./Components/Calculator/Calculator";
import About from "./Components/Pages/About";


function Routes() {
    return (

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/projects">
                <Calculator />
            </Route>
        </Switch>


    );
}

export default Routes;