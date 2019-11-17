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
import { DatePicker } from '../DatePicker';

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
        <div className="column">
          <DatePicker name="Wyjazd od" />
        </div>
        <div className="column">
          <DatePicker name="Powrót przed" />
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
