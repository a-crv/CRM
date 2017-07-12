import React, { Component, PropTypes } from 'react';
import lodashFind from 'lodash/find';

import { BuildTitle, BuildRow, Body } from 'components/Grid';
import Spinner from 'components/Spinner';

import Helpers from 'helpers';

const {
  arrayOf,
  array,
  bool,
  number,
  object,
  oneOfType,
  shape,
  string
} = PropTypes;

export default class MemberGrid extends Component {
  static propTypes = {
    data: arrayOf(object),
    fetched: bool,
    fetching: bool,
    fields: arrayOf(shape({
      name: string,
      mapping: oneOfType([string, array])
    })).isRequired,
    id: number,
    member: string
  };

  static defaultProps = {
    data: [],
    fetched: false,
    fetching: true,
    id: 0,
    member: ''
  }

  constructor(props) {
    super(props);

    this.buildBody = this.buildBody.bind(this);
    this.findTeamMember = this.findTeamMember.bind(this);
    this.buildContent = this.buildContent.bind(this);
  }

  buildContent(test, row) {
    if (test.subName) {
      return (
        <div className="table-list__content">
          <div className="table-list__table">
            { BuildTitle(test.subName) }
            <table>
              <Body>
                { BuildRow(test.subName, row) }
              </Body>
            </table>
          </div>
        </div>
      );
    }

    return (
      <div className="table-list__content">
        { Helpers.mapping(test.mapping, row) }
      </div>
    );
  }

  buildBody(fields, row) {
    if (row.subscription === null) {
      return (
        <li className="table-data__li table-data__li_no-result">No results</li>
      );
    }

    return (
      fields.map((test, index) =>
        <li className="table-data__li table-list" key={`li${index}`}>
          <div className="table-list__title">{test.name}</div>
          { this.buildContent(test, row) }
        </li>
      )
    );
  }

  findTeamMember(data, teamID, userName) {
    let team = lodashFind(data, o => o.id === teamID);
    if (team) {
      team = team.members;
    } else return {};

    let member = lodashFind(team, o => o.user.userName === userName);
    if (member) return (member = member.user);
    return {};
  }

  render() {
    const {
      data,
      fetched,
      fetching,
      fields,
      id,
      member
    } = this.props;

    let newData;

    if (fetched) {
      newData = this.findTeamMember(data, id, member);
    } else {
      newData = {};
    }

    return (
      <div className="table-data">
        <ul className="table-data__ul">
          { fetching ? <Spinner /> : this.buildBody(fields, newData) }
        </ul>
      </div>
    );
  }
}
