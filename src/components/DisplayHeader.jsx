import React from "react";
import "./../styles/display.sass";

const DisplayHeader = () => {

  return (
    <div className="display-header">
      <div className="display-header-title">Название</div>
      <div className="display-header-price">Суслов</div>
      <div className="display-header-price">Сталкер</div>
    </div>
  )
}

export default DisplayHeader;