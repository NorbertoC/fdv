import React, { Component } from 'react';
import { connect } from "react-redux";

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    
    this.onInputChange = this.onInputChange.bind(this);
  }
  
  onInputChange(term) {
    this.props.onSearchChange(term.target.value)
  }
  
  render() {
    
    
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          value={this.props.searchValue}
          onChange={this.onInputChange}
          type={this.props.inputType}
          pattern={this.props.pattern}
          min={this.props.min}
          max={this.props.max}
          className="input-width"
        />
      </div>
    )
  }
}

const mapStateToProps = ({ playersReducer }) => {
  return {
    playerSearched: playersReducer.playerSearched
  };
};

export default connect(mapStateToProps, null)(SearchBar);
