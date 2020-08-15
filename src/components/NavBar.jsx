import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import PDA from '../../images/pda.jpg';

import "./../styles/navbar.sass";
import MainMenu from './MainMenu';
// import AddButton from '../components/AddButton';

const NavBar = () => {

  return (
    <BrowserRouter>
      <div className="navbar">
        <img src={PDA} alt="PDA" />
        <div className="navbar-content">
          <MainMenu />
        </div>
      </div>
    </BrowserRouter>
  );  
}

export default NavBar;