import axios from 'axios';
import {
  FETCH_PLAYERS,
  POSITION_SELECTED,
  SEARCH_PLAYER,
  SEARCH_AGE,
  FILTER_PLAYERS,
  CLEAR_FIELDS
} from '../constants/ActionTypes';

const PLAYERS_URL = 'https://football-players-b31f2.firebaseio.com/players.json?print=pretty';

export const fetchPlayers = () => {
  const request = axios.get(PLAYERS_URL)
  
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: FETCH_PLAYERS,
        payload: response.data,
      })
    })
  };
};


export const selectPosition = (position) => {
  return {
    type: POSITION_SELECTED,
    payload: position,
  };
};

export const searchPlayer = (player) => {
  return {
    type: SEARCH_PLAYER,
    payload: player,
  };
};

export const searchAge = (age) => {
  return {
    type: SEARCH_AGE,
    payload: age,
  };
};

export const filterPlayers = (name, position, age) => {
  return {
    type: FILTER_PLAYERS,
    payload: {
      name,
      position: position,
      age,
    },
  };
};

export const clearFields = () => {
  return {
    type: CLEAR_FIELDS,
  };
};

