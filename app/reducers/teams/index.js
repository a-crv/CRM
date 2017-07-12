import { combineReducers } from 'redux';

import {
  GET_TEAMS_GRID_FIELDS,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL
} from 'actions/teams';

import defaultTeamsGridFields from './defaults';

const initialState = {
  data: [],
  error: null,
  fetched: false,
  fetching: false,
  needToFetchInitialData: true,
  nextBatch: null
};

function onGetDataSuccess(state, action) {
  const teams = [];
  let nextBatch;

  for (let i = 0; i < action.payload.length; i += 1) {
    if (action.payload[i]['@metadata'].next_batch) {
      nextBatch = action.payload[i]['@metadata'].next_batch || null;
      continue;
    }

    teams.push(action.payload[i]);
  }

  return {
    ...state,
    data: state.data.concat(teams),
    fetched: true,
    fetching: false,
    needToFetchInitialData: false,
    nextBatch
  };
}

function getTeams(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        fetching: true
      };

    case GET_DATA_SUCCESS:
      return onGetDataSuccess(state, action);

    case GET_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };

    default:
      return state;
  }
}

function getTeamsGrid(state = defaultTeamsGridFields, action) {
  switch (action.type) {
    case GET_TEAMS_GRID_FIELDS:
      return state;

    default:
      return state;
  }
}

export default combineReducers({
  getTeams,
  getTeamsGrid
});
