import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PDA from './../images/pda.jpg';
import './../styles/content.sass';
import MainMenu from './MainMenu';
import Sales from "./Sales";
import Buy from "./Buy";

const Content = () => {

  return (
    <Router>
      <div className="content">
        <img src={PDA} alt="PDA" />
        <div className="content-wrap">
          <MainMenu />
          <Switch>
            <Route path="/buy">
              <Buy />
            </Route>
            <Route path="/sales">
              <Sales />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );  
}

export default Content;