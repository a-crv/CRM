import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getDocData } from 'actions/document';
import { DocGrid } from 'components/Grid';

class Doc extends Component {
  static propTypes = {
    docs: PropTypes.arrayOf(PropTypes.object).isRequired,

    doc: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,

    getDocData: PropTypes.func.isRequired,

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
    this.props.getDocData(this.props.docs, +this.props.match.params.id);
  }

  render() {
    const { url } = this.props.match;
    const { doc, grid } = this.props;

    console.log(doc);

    return (
      <DocGrid data={doc} fields={grid} url={url} />
    );
  }
}

function mapStateToProps(state) {
  const { combineDocReducer, combineDocsReducer } = state;

  return {
    docs: combineDocsReducer.getDocs.data,
    doc: combineDocReducer.getDocData,
    grid: combineDocReducer.getDocGrid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDocData: bindActionCreators(getDocData, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Doc);
