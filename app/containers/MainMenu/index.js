/**
 *
 * MainMenu
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import './main-menu.css';

import styled from 'styled-components';

const items = [
  'TOP Oferty',
  'Super last minute',
  'All inclusive',
  'Kreta 2020',
  'Lato',
  'Zima',
];

export function MainMenu() {
  return (
    <div className="container d-flex flex-column" style={{ marginTop: '25px' }}>
      <ButtonGroup className="mt-3">
        {items.map(i => (
          <Button className="main-menu-btn">{i}</Button>
        ))}
      </ButtonGroup>
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

export default compose(withConnect)(MainMenu);
