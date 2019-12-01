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
  margin-top: 5px;
`;

const Item = styled.div`
  &:hover {
    cursor: pointer;

    background-color: #dcf9fa;
    border-radius: 10px;
  }

  padding: 5px;
  margin: 5px;
`;

export const ItemList = ({ items, paddingless, line }) => (
  <div className="container">
    <div
      className={classnames('section', { 'is-paddingles-top': paddingless })}
    >
      <div className="columns">
        {items.map(i => (
          <div className={classnames('column')}>
            <Item>{i}</Item>
          </div>
        ))}
      </div>
      {line && <Line />}
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
