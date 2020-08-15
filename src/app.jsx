import React from 'react';
import 'normalize.css';
import Content from './components/Content';

import "./styles/interface.sass";
import "./styles/app.sass";
// import Table from './components/Table';

export default function App() {
  return (
    <div className="app">
      <Content />
    </div>
  )  
}