const GET_DOCS_GRID_FIELDS = 'GET_DOCS_GRID_FIELDS';
const GET_DOCS_DATA_REQUEST = 'GET_DOCS_DATA_REQUEST';
const GET_DOCS_DATA_SUCCESS = 'GET_DOCS_DATA_SUCCESS';
const GET_DOCS_DATA_FAIL = 'GET_DOCS_DATA_FAIL';

// function getDocsData(url) {
//   return (dispatch) => {
//     dispatch({
//       type: 'GET_DOCS_DATA_REQUEST'
//     });

//     ajax({
//       url,
//       method: 'GET',
//       dataType: 'json',
//       beforeSend: (xhr) => {
//         xhr.setRequestHeader('Authorization', `Basic ${btoa('feuser:receipts1')}`);
//       }
//     }).done((response) => {
//       dispatch({
//         type: 'GET_DOCS_DATA_SUCCESS',
//         payload: response
//       });
//     }).fail((response) => {
//       dispatch({
//         type: 'GET_DOCS_DATA_FAIL',
//         payload: response
//       });
//     });
//   };
// }

function getDocsData(url) {
  return (dispatch) => {
    dispatch({
      type: 'GET_DOCS_DATA_REQUEST'
    });

    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${btoa('feuser:receipts1')}`
      }
    })
      .then(res => res.json())
      .then(res => dispatch({
        type: 'GET_DOCS_DATA_SUCCESS',
        payload: res
      }))
      .catch(error => dispatch({
        type: 'GET_DOCS_DATA_FAIL',
        payload: error
      }));
  };
}

export {
  GET_DOCS_GRID_FIELDS,
  GET_DOCS_DATA_REQUEST,
  GET_DOCS_DATA_SUCCESS,
  GET_DOCS_DATA_FAIL,
  getDocsData
};
