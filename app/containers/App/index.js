import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Nav from 'components/Navigation';
// import Breadcrumbs from 'components/Breadcrumbs';
import Teams from 'containers/Teams';
import Team from 'containers/Team';
import Docs from 'containers/Documents';
import Doc from 'containers/Document';

import { MemberGrid } from 'components/Grid';

class App extends Component {
  static propTypes = {
    gridMember: PropTypes.array,  // eslint-disable-line react/forbid-prop-types
    teamsData: PropTypes.object   // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    gridMember: [],
    teamsData: {},
  };

  render() {
    const {
      gridMember,
      teamsData
    } = this.props;

    return (
      <div className="app">
        <Header className="app__header" />
        <main className="app__managing-table managing-table">
          <div className="managing-table__header table-header">
            {/*<Breadcrumbs className="table-header__breadcrumbs" />*/}
            <Nav className="table-header__nav" />
          </div>

          {/*<div className="managing-table__search">
            <div className="managing-table__search-field">
              <input type="text" className="input input_text" placeholder="Seach" />
            </div>
          </div>*/}

          <Switch>
            <Route exact path="/teams" component={Teams} />

            <Route
              path="/teams/:id/:member"
              render={({ match }) => (
                <MemberGrid
                  data={teamsData.data}
                  fetched={teamsData.fetched}
                  fetching={teamsData.fetching}
                  fields={gridMember}
                  id={+match.params.id}
                  member={match.params.member}
                />
              )}
            />

            <Route exact path="/teams/:id" component={Team} />
            <Route exact path="/documents" component={Docs} />
            <Route exact path="/documents/:id" component={Doc} />
            <Redirect to="/teams" />
          </Switch>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { combineTeamsReducer, combineTeamReducer, combineMemberReducer } = state;

  return {
    teamsData: combineTeamsReducer.getTeams,
    gridTeams: combineTeamsReducer.getTeamsGrid,
    gridTeam: combineTeamReducer.getTeamGrid,
    gridMember: combineMemberReducer.getMemberGrid,
  };
}

export default connect(mapStateToProps)(App);
