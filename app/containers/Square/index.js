/**
 *
 * Square
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { CardDeck, Card } from 'react-bootstrap';
import './card-photo.css';

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
  <CardDeck>
    <Card>
      <Card.Img variant="top" src={picture} id="card-photo" />
      <Card.Footer className="card-photo-footer">{text}</Card.Footer>
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

export default compose(withConnect)(Square);
