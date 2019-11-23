/**
 *
 * ItemList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Hotel from '../Hotel';

const hotelList = [
  <Hotel
    rating="4.4"
    price="1 699 zł/os"
    information="7 dni TUI Polska"
    name="Titan Select"
  />,
  <Hotel
    rating="4.4"
    price="1 699 zł/os"
    information="7 dni TUI Polska"
    name="Titan Select"
  />,
  <Hotel
    rating="4.4"
    price="1 699 zł/os"
    information="7 dni TUI Polska"
    name="Titan Select"
  />,
  <Hotel
    rating="4.4"
    price="1 699 zł/os"
    information="7 dni TUI Polska"
    name="Titan Select"
  />,
  <Hotel
    rating="4.4"
    price="1 699 zł/os"
    information="7 dni TUI Polska"
    name="Titan Select"
  />,
];

export function ItemList() {
  return (
    <div className="container">
      <div className="section">
        <div className="columns">
          {hotelList.map(i => (
            <div className="column is-one-fifth">{i}</div>
          ))}
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

export default compose(withConnect)(ItemList);
