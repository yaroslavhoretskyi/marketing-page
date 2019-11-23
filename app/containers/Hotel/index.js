/**
 *
 * Hotel
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';

const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  min-width: 100px;
  height: 300px;
  max-width: 300px;
`;
const Image = styled.div`
  background-image: url('https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg');
  height: 200px;
  position: relative;
`;
const Name = styled.div`
  font-size: 26px;
  color: #0044cc;
  font-weight: 500;
`;
const Information = styled.div`
  font-size: 14px;
  color: #004080;
  font-weight: 500;
`;
const Stars = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #f2f2f2;
  margin: 10px;
  border-radius: 10px;
  width: 80px;
  height: 40px;
  opacity: 0.5;
  text-align: center;
  color: #334;
  font-size: 25px;
`;
const Price = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 26px;
  color: #0044cc;
  font-weight: 500;
`;

export const Hotel = ({ rating, name, price, information }) => (
  <Item>
    <Image>
      <Stars>
        <div>{rating}</div>
      </Stars>
    </Image>
    <Name>{name}</Name>
    <Information>{information}</Information>
    <Price>{price}</Price>
  </Item>
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

export default compose(withConnect)(Hotel);
