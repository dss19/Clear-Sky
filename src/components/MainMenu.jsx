import React from "react";
import './../styles/mainmenu.sass';
import { NavLink } from "react-router-dom";


const MainMenu = () => {

  return (
    <div className="main-menu">
      <NavLink to="/buy" className="main-menu-link">Скупка</NavLink>
      <NavLink to="/sales" className="main-menu-link">Продажа</NavLink>
    </div>
  );

}

export default MainMenu;