/**
 *
 * Square
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import styled from 'styled-components';

const Image = styled.div`
  && {
    div {
      background-image: url(${props => props.picture});
      border-radius: 5px;
      width: 280px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #66ffe0;
      font-weight: 600;
      font-size: 26px;
    }
  }
`;

export const Square = ({ picture, text }) => (
  <Image picture={picture}>
    <div>{text}</div>
  </Image>
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

export default compose(withConnect)(Square);
