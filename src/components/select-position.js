import React, { Component } from 'react'
import { connect } from "react-redux";

class SelectPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.props.onPositionSelect(event.target.value)
  }
  
  buildOptions(options) {
    let optionsArray = options.map((item, index) => {
      return (
        <option value={item} key={index} >{item}</option>
      )
    });
    
    return (
      <select value={this.props.position} onChange={this.handleChange}>
        {optionsArray}
      </select>
    )
  }
  
  render() {
    const possiblePositions = [
      'Select Position',
      'Attacking Midfield',
      'Central Midfield',
      'Centre-Back',
      'Centre-Forward',
      'Centre-Forward',
      'Defensive Midfield',
      'Keeper',
      'Left Midfield',
      'Left Wing',
      'Left-Back',
      'Right-Back'
    ];
    
    return (
      <div>
        {this.buildOptions(possiblePositions)}
      </div>
    );
  }
}

const mapStateToProps = ({ playersReducer }) => {
  const { position } = playersReducer;
  return {
    position,
  };
};

export default connect(mapStateToProps, null)(SelectPosition);
