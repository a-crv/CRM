import React, { Component, PropTypes } from 'react';

import { BuildTitle, BuildRow, Body } from 'components/Grid';
// import Spinner from 'components/Spinner';

import Helpers from 'helpers';

export default class DocGrid extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      subName: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        mapping: PropTypes.arrayOf(PropTypes.string)
      }))
    })).isRequired
  };

  constructor(props) {
    super(props);

    this.buildBody = this.buildBody.bind(this);
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

  render() {
    const {
      data,
      fields
    } = this.props;

    return (
      <div className="table-data">
        <ul className="table-data__ul">
          {this.buildBody(fields, data)}
          {/*{ fetching ? <Spinner /> : this.buildBody(fields, newData) }*/}
        </ul>
      </div>
    );
  }
}
