const GET_TEAMS_GRID_FIELDS = 'GET_TEAMS_GRID_FIELDS';
const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
const GET_DATA_FAIL = 'GET_DATA_FAIL';

function getData(url) {
  return (dispatch) => {
    dispatch({
      type: 'GET_DATA_REQUEST'
    });

    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${btoa('feuser:receipts1')}`
      }
    })
      .then(res => res.json())
      .then(res => dispatch({
        type: 'GET_DATA_SUCCESS',
        payload: res
      }))
      .catch(error => dispatch({
        type: 'GET_DATA_FAIL',
        payload: error
      }));
  };
}

export {
  GET_TEAMS_GRID_FIELDS,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  getData
};
