import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import lodashIsArray from 'lodash/isArray';

import { BuildTitle, BuildRow, Body } from 'components/Grid';
import Spinner from 'components/Spinner';

export default class Grid extends Component {
  static propTypes = {
    data: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      fetched: PropTypes.bool,
      fetching: PropTypes.bool,
      nextBatch: PropTypes.string
    }).isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      mapping: PropTypes.string
    })).isRequired,
    uploadTeams: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
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
          <Link to={`${this.props.url}/${row.id}`} className="table-data__link" />
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
    const { data, fetching, nextBatch } = this.props.data;
    const fields = this.props.fields;
    const uploadTeams = this.props.uploadTeams;

    return (
      <div className="table-data">
        <div className="table-data__content">
          <div className="table-data__title">
            { BuildTitle(fields) }
          </div>
          <ul className="table-data__ul">
            { this.buildBody(fields, data) }
            { fetching ? <Spinner /> : null }
          </ul>
        </div>
        {
          nextBatch
          ? (
            <div className="app__upload-data">
              <button className="btn btn_primary" type="button" onClick={uploadTeams}>
                Upload teams
              </button>
            </div>
          )
          : null
        }
      </div>
    );
  }
}

// componentDidMount() {
//   window.addEventListener('scroll', this.handleScroll);
// }

// componentWillUnmount() {
//   window.removeEventListener('scroll', this.handleScroll);
// }

// handleScroll(event) {
//   if (!this.props.nextBatch) return false;

//   var scrollHeight = Math.max(
//     event.target.body.scrollHeight, event.target.documentElement.scrollHeight,
//     event.target.body.offsetHeight, event.target.documentElement.offsetHeight,
//     event.target.body.clientHeight, event.target.documentElement.clientHeight
//   );

//   if (scrollHeight === window.pageYOffset + event.target.documentElement.clientHeight) {
//     console.log('lol')
//     this.props.actions.getData(this.props.nextBatch);
//   }
// }
