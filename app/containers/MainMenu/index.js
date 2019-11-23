/**
 *
 * MainMenu
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import styled from 'styled-components';

const Line = styled.div`
  border: 1px solid #000;
  border-bottom-color: #fff;
`;
const Container = styled.div`
  && {
    .section {
      padding-bottom: 0px !important;
    }

    .column {
      &:hover {
        color: #ff751a;
        font-weight: 500;
      }
    }
  }
`;

const items = [
  'TOP Oferty',
  'Super last minute',
  'All inclusive',
  'Kreta 2020',
  'Lato',
];

export function MainMenu() {
  return (
    <Container className="container">
      <div className="section">
        <div className="columns is-marginless">
          {items.map(i => (
            <div className="column">{i}</div>
          ))}
          <div className="column is-two-fifths" />
        </div>
        <Line />
      </div>
    </Container>
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

export default compose(withConnect)(MainMenu);
