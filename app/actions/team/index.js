const GET_TEAM_GRID_FIELDS = 'GET_TEAM_GRID_FIELDS';
const GET_TEAM_DATA = 'GET_TEAM_DATA';

function getTeamData(teams, teamID) {
  return {
    type: 'GET_TEAM_DATA',
    payload: {
      teams,
      teamID
    }
  };
}

export { GET_TEAM_GRID_FIELDS, GET_TEAM_DATA, getTeamData };
