/**
 *
 * ItemList
 *
 */

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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

export const ItemList = ({ items, paddingless, line, links }) => (
  <div className="container">
    <div
      className={classnames('section', { 'is-paddingles-top': paddingless })}
    >
      <div className="columns">
        {links
          ? items.map((e, i) => (
              <div className={classnames('column')}>
                <NavLink to={`/offer/${i}`}>
                  <Item>{e}</Item>
                </NavLink>
              </div>
            ))
          : items.map(e => (
              <div className={classnames('column')}>
                <Item>{e}</Item>
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
