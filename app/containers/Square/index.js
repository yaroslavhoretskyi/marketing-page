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
