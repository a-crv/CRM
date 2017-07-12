import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTeamData } from 'actions/team';
import { TeamGrid } from 'components/Grid';

class Team extends Component {
  static propTypes = {
    teams: PropTypes.arrayOf(PropTypes.object).isRequired,

    team: PropTypes.arrayOf(PropTypes.object).isRequired,

    getTeamData: PropTypes.func.isRequired,

    grid: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      mapping: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    })).isRequired,

    match: PropTypes.shape({
      url: PropTypes.string,
      params: PropTypes.shape({
        id: PropTypes.string
      })
    }).isRequired
  };

  componentWillMount() {
    this.props.getTeamData(this.props.teams, +this.props.match.params.id);
  }

  render() {
    const { url } = this.props.match;
    const { id } = this.props.match.params;
    const { team, grid } = this.props;

    return (
      <TeamGrid data={team} fields={grid} url={url} id={id} />
    );
  }
}

function mapStateToProps(state) {
  const { combineTeamReducer, combineTeamsReducer } = state;

  return {
    teams: combineTeamsReducer.getTeams.data,
    team: combineTeamReducer.getTeamData,
    grid: combineTeamReducer.getTeamGrid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTeamData: bindActionCreators(getTeamData, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);
