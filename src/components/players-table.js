import React, { Component } from 'react';

class PlayersTable extends Component {
  constructor(props) {
    super(props)
    
    this.state = {}
  }
  
  buildHeader(header) {
    let th = header.map((item, index) => {
      return <th key={index}>{item}</th>
    });
    
    return (
      <tr>{th}</tr>
    )
  }
  
  buildRow(row, i) {
    let tdName = [];
    let tdPosition = [];
    let tdAge = [];
    
    Object.keys(row).forEach((item) => {
      if (item === 'name') {
        tdName.push(<td key={row.name}>{row[item]}</td>)
      } else if (item === 'position') {
        tdPosition.push(<td key={row.name}>{row[item]}</td>)
      } else if (item === 'dateOfBirth') {
        const today = new Date();
        const birthDate = new Date(row[item]);
        let age = today.getFullYear() - birthDate.getFullYear();
        tdAge.push(<td key={row.name}>{age}</td>)
      }
    });
    
    return (
      <tr key={i}>
        {tdName}
        {tdPosition}
        {tdAge}
      </tr>
    )
  }
  
  render() {
    const { playersToShow } = this.props;
    const tableTitles = ['Name', 'Position', 'Age'];
    
    if (!playersToShow.length) {
      return <div className="table-container ">No Player to show</div>
    }
    
    return (
      <div className="table-container">
        <table className="table table-striped">
          <thead>
          {this.buildHeader(tableTitles)}
          </thead>
          <tbody>
          {playersToShow.map(this.buildRow)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PlayersTable;
