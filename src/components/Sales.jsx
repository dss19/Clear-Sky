import React from "react";
import "./../styles/second-menu.sass";
import { Link, useRouteMatch } from "react-router-dom";

const Sales = () => {

  let { url } = useRouteMatch();

  return (
    <div className="second-menu">
      <div className="second-menu-wrap">
        <Link to={`${url}/weapon`} className="second-menu-link">
          Оружие
        </Link>
          <Link to={`${url}/backpacks`} className="second-menu-link">
            Рюкзаки
        </Link>
          <Link to={`${url}/vests`} className="second-menu-link">
            Разгрузки
        </Link>
      </div>
    </div>
  );
};

export default Sales;
