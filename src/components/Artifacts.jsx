import React from "react";
import './../styles/display.sass';
import { connect } from 'react-redux';
import DisplayHeader from "./DisplayHeader";
import SearchInput from './SearchInput';

const Artifacts = ({ tableItems, term }) => {

  const visItems = tableItems.artifacts.filter(item => {
    return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
  })

  const elements = visItems.map((item) => {
    const { id, label, price1, price2 } = item;
    return (
      <div key={id} className="display-item">
        <div className="display-item-name">{label}</div>
        <div className="display-item-price-1">{price1}</div>
        <div className="display-item-price-2">{price2}</div>
      </div>
    )  
  });

  return (
    <div className="display">
      <SearchInput />
      <DisplayHeader />
      <div className="display-items">{elements}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Artifacts);
