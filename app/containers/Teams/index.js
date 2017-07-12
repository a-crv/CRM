import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getData } from 'actions/teams';
import { TeamsGrid } from 'components/Grid';

// const oldUrl = 'http://54.161.40.191:8080/rest/default/cms/v1/teams';
const newUrl = 'http://34.206.14.201:8080/rest/default/cms/v1/teams';

class Teams extends Component {
  static propTypes = {
    data: PropTypes.shape({
      needToFetchInitialData: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.object),
      fetched: PropTypes.bool,
      fetching: PropTypes.bool,
      nextBatch: PropTypes.string
    }).isRequired,

    getData: PropTypes.func.isRequired,

    grid: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      mapping: PropTypes.string
    })).isRequired,

    match: PropTypes.shape({
      url: PropTypes.string
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.onClickUploadTeams = this.onClickUploadTeams.bind(this);
  }

  componentWillMount() {
    if (this.props.data.needToFetchInitialData) {
      this.props.getData(newUrl);
    }
  }

  onClickUploadTeams() {
    const nextBatch = this.props.data.nextBatch;

    if (!nextBatch) {
      return false;
    }

    this.props.getData(nextBatch);

    return this;
  }

  render() {
    const { url } = this.props.match;
    const { data, grid } = this.props;
    const onClickUploadTeams = this.onClickUploadTeams;

    return (
      <TeamsGrid data={data} fields={grid} url={url} uploadTeams={onClickUploadTeams} />
    );
  }
}

function mapStateToProps(state) {
  const { combineTeamsReducer } = state;

  return {
    data: combineTeamsReducer.getTeams,
    grid: combineTeamsReducer.getTeamsGrid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: bindActionCreators(getData, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
