import { combineReducers } from 'redux';

import {
  GET_DOCS_GRID_FIELDS,
  GET_DOCS_DATA_REQUEST,
  GET_DOCS_DATA_SUCCESS,
  GET_DOCS_DATA_FAIL
} from 'actions/documents';

import { onGetDataSuccess } from 'helpers';
import defaultTeamsGridFields from './defaults';

const initialState = {
  data: [],
  error: null,
  fetched: false,
  fetching: false,
  needToFetchInitialData: true,
  nextBatch: null
};

function getDocs(state = initialState, action) {
  switch (action.type) {
    case GET_DOCS_DATA_REQUEST:
      return {
        ...state,
        fetching: true
      };

    case GET_DOCS_DATA_SUCCESS:
      return onGetDataSuccess(state, action);

    case GET_DOCS_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };

    default:
      return state;
  }
}

function getDocsGrid(state = defaultTeamsGridFields, action) {
  switch (action.type) {
    case GET_DOCS_GRID_FIELDS:
      return state;

    default:
      return state;
  }
}

export default combineReducers({
  getDocs,
  getDocsGrid
});
