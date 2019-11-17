/**
 *
 * Search
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Transport } from '../Transport';

export function Search() {
  return (
    <div className="box">
      {/* <span className="icon is-left">
        <FontAwesomeIcon icon={faSearch} />
      </span> */}
      <div className="columns">
        <div className="column">
          <Transport />
        </div>
      </div>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Search);
