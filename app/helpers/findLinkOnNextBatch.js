export default function(state, action) {
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
