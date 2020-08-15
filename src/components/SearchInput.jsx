import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { search } from '../redux/actions/index';

class SearchInput extends Component {  
  
  onSeacrChange = (e) => {
    const term = e.target.value;
    this.props.search(term);        
  }

  render() {
    return (
      <input
        className="display-input"  
        type="text" 
        placeholder="Введите название"
        onChange={this.onSeacrChange} />      
    )
  }  
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { search })(SearchInput);