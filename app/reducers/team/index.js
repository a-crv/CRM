import { combineReducers } from 'redux';
import lodashFind from 'lodash/find';

import { GET_TEAM_GRID_FIELDS, GET_TEAM_DATA } from 'actions/team';

import defaultTeamGridFields from './defaults';

function findTeam(teams, teamID) {
  const team = lodashFind(teams, o => o.id === teamID);

  if (team) return team.members;
  return [];
}

function getTeamGrid(state = defaultTeamGridFields, action) {
  switch (action.type) {
    case GET_TEAM_GRID_FIELDS:
      return state;

    default:
      return state;
  }
}

function getTeamData(state = [], action) {
  switch (action.type) {
    case GET_TEAM_DATA:
      return findTeam(action.payload.teams, action.payload.teamID);

    default:
      return state;
  }
}

export default combineReducers({
  getTeamGrid,
  getTeamData
});
