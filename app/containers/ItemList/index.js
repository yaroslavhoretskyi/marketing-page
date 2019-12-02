/**
 *
 * ItemList
 *
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classnames from 'classnames';

const Line = styled.div`
  border: 1px solid #000;
  border-bottom-color: #fff;
`;

export const ItemList = ({ items, paddingless, line }) => (
  <div className="container">
    <div
      className={classnames('section', { 'is-paddingles-top': paddingless })}
    >
      <div className="columns">
        {items.map(i => (
          <div className={classnames('column')}>{i}</div>
        ))}
      </div>
    </div>
  </div>
);

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
