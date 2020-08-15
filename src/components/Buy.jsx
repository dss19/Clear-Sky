import React from "react";
import "./../styles/second-menu.sass";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import Artifacts from './Artifacts';
import Mutants from './Mutants';

const Buy = () => {

  let { url } = useRouteMatch();
  
  return (
    <div className="second-menu">
      <div className="second-menu-wrap">
        <NavLink to={`${url}/artifacts`} className="second-menu-link">
          Артифакты
        </NavLink>
        <NavLink to={`${url}/mutants`} className="second-menu-link">
          Части мутантов
        </NavLink>
        <NavLink to={`${url}/other`} className="second-menu-link">
          Прочее
        </NavLink>
      </div>
      <Switch>
        <Route path={`${url}/artifacts`}>
          <Artifacts />
        </Route>
        <Route path={`${url}/mutants`}>
          <Mutants />
        </Route>
      </Switch>      
    </div>
  );
};

export default Buy;
