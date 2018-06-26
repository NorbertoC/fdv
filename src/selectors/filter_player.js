import _ from 'lodash';
import { createSelector } from 'reselect';

// Create select functions to pick off the pieces of state we care about
const selectedPositionSelector = state => state.playersReducer.players;
const selectedPlayersSelector = state => state.playersReducer.filteredPlayers;

const getPlayer = (players, playerSearched) => {
  const selectedPosition = _.filter(players, (item) => _.contains(playerSearched.position, item.position));
  const ageAndNameIncluded = [];
  _.forEach(selectedPosition, (item) => {
    const playerName = item.name.toLowerCase()
    const today = new Date();
    const birthDate = new Date(item.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    debugger
    if(playerSearched.age === age && playerName.includes(playerSearched.name)) {
      ageAndNameIncluded.push(item);
    }
  });
  return ageAndNameIncluded;
}

export default createSelector(
  selectedPositionSelector,
  selectedPlayersSelector,
  getPlayer
);
