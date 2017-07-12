import { combineReducers } from 'redux';
import lodashFind from 'lodash/find';

import { GET_DOC_GRID_FIELDS, GET_DOC_DATA } from 'actions/document';

import defaultDocGridFields from './defaults';

function findDoc(docs, docID) {
  const doc = lodashFind(docs, o => o.id === docID);

  if (doc) return doc;
  return {};
}

function getDocGrid(state = defaultDocGridFields, action) {
  switch (action.type) {
    case GET_DOC_GRID_FIELDS:
      return state;

    default:
      return state;
  }
}

function getDocData(state = [], action) {
  switch (action.type) {
    case GET_DOC_DATA:
      return findDoc(action.payload.docs, action.payload.docID);

    default:
      return state;
  }
}

export default combineReducers({
  getDocGrid,
  getDocData
});
