import { combineReducers } from 'redux';

import GET_MEMBER_GRID_FIELDS from 'actions/member';

import defaultMemberGridFields from './defaults';

function getMemberGrid(state = defaultMemberGridFields, action) {
  switch (action.type) {
    case GET_MEMBER_GRID_FIELDS:
      return state;

    default:
      return state;
  }
}

export default combineReducers({
  getMemberGrid
});
