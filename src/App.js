import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPlayers, selectPosition, searchPlayer, searchAge, filterPlayers, clearFields } from "./actions";
import SearchBar from './components/search_bar';
import PlayersTable from "./components/players-table";
import SelectPosition from "./components/select-position";
import FilterSelector from './selectors/filter_player';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    
    this.state = {};
  }
  
  componentDidMount() {
    this.props.fetchPlayers();
  }
  
  handleSearchClick() {
    const { playerSearched, position, ageSearched, filterPlayers } = this.props;
    const age = parseInt(ageSearched)
    if (playerSearched && position && (18 < age < 40)) {
      filterPlayers(playerSearched, position, age)
    } else {
      alert(`There is no player with this values`);
    }
  }
  
  handleClearClick() {
    this.props.clearFields();
  }
  
  render() {
    return (
      <div>
        <div className="form-container">
          <SearchBar
            onSearchChange={value => this.props.searchPlayer(value)}
            placeholder="Player Name"
            searchValue={this.props.playerSearched}
            inputType="text"
            pattern="[A-Za-z]+"
          />
          <SelectPosition
            onPositionSelect={(positionValue) => this.props.selectPosition(positionValue)}
          />
          <SearchBar
            onSearchChange={value => this.props.searchAge(value)}
            placeholder="Age"
            searchValue={this.props.ageSearched}
            inputType="number"
            min="18"
            max="40"
          />
          <div>
            <button onClick={this.handleSearchClick}>
              Search
            </button>
            <button onClick={this.handleClearClick}>
              Clear filters
            </button>
          </div>
        </div>
        <PlayersTable playersToShow={this.props.filteredPlayers} />
      </div>
    
    )
  }
}

const mapStateToProps = state => {
  const { players, playerSearched, position, ageSearched } = state.playersReducer;
  
  return {
    players,
    playerSearched,
    position,
    ageSearched,
    filteredPlayers: FilterSelector(state),
  };
};

export default connect(mapStateToProps, {
  fetchPlayers,
  selectPosition,
  searchPlayer,
  searchAge,
  filterPlayers,
  clearFields,
})(App);

