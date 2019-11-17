/**
 *
 * Search
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Transport } from '../Transport';
import { TravelDirection } from '../TravelDirection';

export function Search() {
  return (
    <div className="box">
      <div className="columns">
        <div className="column">
          <Transport />
        </div>
        <div className="column">
          <TravelDirection />
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
