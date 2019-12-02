/**
 *
 * Hotel
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import { Card, CardDeck, Badge } from 'react-bootstrap';
import * as Fa from 'react-icons/fa';

const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  min-width: 100px;
  height: 250px;
  max-width: 300px;
`;
const Image = styled.div`
  background-image: url(${props => props.picture});
  height: 150px;
  position: relative;
  border-radius: 10px;
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
  top: 0;
  right: 0;
  margin: 10px;
  opacity: 0.8;
  text-align: center;
  font-size: 15px
`;
const Price = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 26px;
  color: #0044cc;
  font-weight: 500;
`;

export const Hotel = ({ rating, name, price, information, picture }) => (

  <CardDeck>
    <Card>
    <Card.Img variant="top" src={picture} />
    <Stars><Badge variant="light">{rating} <Fa.FaStar/></Badge></Stars>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {information}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{price}</small>
    </Card.Footer>
  </Card>
  </CardDeck>
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
