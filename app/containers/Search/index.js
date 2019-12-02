/**
 *
 * Search
 *
 */

import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Transport } from '../Transport';
import { TravelDirection } from '../TravelDirection';
import { DatePicker } from '../DatePicker';
import { Dropdown } from '../Dropdown';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 23px;
`;

export function Search() {
  return (
    <div className="box is-fullwidth">
      <div className="columns">
        <div className="column">
          <Transport />
        </div>
        <div className="column">
          <DatePicker name="Wyjazd od" />
        </div>
        <div className="column">
          <DatePicker name="Powrót przed" />
        </div>
        <div className="column">
          <Dropdown name="Dorośli" />
        </div>
        <div className="column">
          <Dropdown name="Dzieci" />
        </div>
        <div className="column">
          <TravelDirection />
        </div>
        <div className="column">
          <Div>
            <button className="button is-primary" type="button">
              Szukaj
            </button>
          </Div>
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
