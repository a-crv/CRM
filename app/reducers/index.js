import { combineReducers } from 'redux';

import combineTeamsReducer from './teams';
import combineTeamReducer from './team';
import combineMemberReducer from './member';
import combineDocsReducer from './documents';
import combineDocReducer from './document';

export default combineReducers({
  combineTeamsReducer,
  combineTeamReducer,
  combineMemberReducer,
  combineDocsReducer,
  combineDocReducer
});
