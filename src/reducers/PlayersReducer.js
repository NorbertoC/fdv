import {
  FETCH_PLAYERS,
  POSITION_SELECTED,
  SEARCH_PLAYER,
  SEARCH_AGE,
  FILTER_PLAYERS,
  CLEAR_FIELDS
} from '../constants/ActionTypes';

const INITIAL_STATE = {
  players: [],
  playerSearched: '',
  position: '',
  ageSearched: '',
  filteredPlayers: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PLAYERS:
      return { ...state, players: action.payload };
    case POSITION_SELECTED:
      return { ...state, position: action.payload };
    case SEARCH_PLAYER:
      return { ...state, playerSearched: action.payload };
    case SEARCH_AGE:
      return { ...state, ageSearched: action.payload };
    case FILTER_PLAYERS:
      return { ...state, filteredPlayers: action.payload };
    case CLEAR_FIELDS:
      return { ...state, playerSearched: '', position: '', ageSearched: '' };
    default:
      return state;
  }
};
