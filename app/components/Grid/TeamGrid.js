import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import lodashIsArray from 'lodash/isArray';

import { BuildTitle, BuildRow, Body } from 'components/Grid';
// import Spinner from 'components/Spinner';

export default class TeamGrid extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      mapping: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    })).isRequired
    // id: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    this.buildBody = this.buildBody.bind(this);
  }

  buildBody(fields, rows) {
    if (lodashIsArray(rows) && rows.length === 0) {
      return (
        <li className="table-data__li table-data__li_no-result">No results</li>
      );
    }

    return (
      rows.map((row, index) =>
        <li className="table-data__li" key={`li${index}`}>
        <Link to={`${this.props.url}/${row.user.userName}`} className="table-data__link" />
          <table key={`table${index}`}>
            <Body>
              { BuildRow(fields, row, index) }
            </Body>
          </table>
        </li>
      )
    );
  }

  render() {
    const {
      data,
      fields
    } = this.props;

    return (
      <div className="table-data">
        <div className="table-data__title">
          { BuildTitle(fields) }
        </div>
        <ul className="table-data__ul">
          { this.buildBody(fields, data) }
          {/*{ fetching ? <Spinner /> : null }*/}
        </ul>
      </div>
    );
  }
}
