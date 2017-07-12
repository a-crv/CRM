const GET_DOC_GRID_FIELDS = 'GET_DOC_GRID_FIELDS';
const GET_DOC_DATA = 'GET_DOC_DATA';

function getDocData(docs, docID) {
  return {
    type: 'GET_DOC_DATA',
    payload: {
      docs,
      docID
    }
  };
}

export { GET_DOC_GRID_FIELDS, GET_DOC_DATA, getDocData };
