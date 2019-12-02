/**
 *
 * OfferTemplate
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { compose } from 'redux';
import ImageChanger from 'containers/ImageChanger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Name = styled.div`
  margin-right: 10px;
  font-weight: 600;
  font-size: 26px;
`;

const PriceText = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-right: 20px;
`;

const Price = styled.div`
  font-weight: 800;
  font-size: 26px;
  color: #fc1248;
`;

const Description = styled.div`
  font-weight: 800;
  font-size: 24px;
  color: #fcb212;
  margin: 10px 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OfferTemplate = ({
  imageList,
  stars,
  name,
  price,
  persones,
  days,
  description,
  region,
  actions,
  rooms,
}) => (
  <>
    <div className="container">
      <div className="section">
        <div className="columns is-multiline">
          <div className="column is-full">
            <div className="is-flex justify-content-center align-content-center">
              <Name>{name}</Name>
              <div>
                {stars.map(i => (
                  <FontAwesomeIcon style={{ color: 'gold' }} icon={faStar} />
                ))}
                {stars.length < 5 &&
                  [...Array(5 - stars.length).keys()].map(i => (
                    <FontAwesomeIcon icon={faStar} />
                  ))}
              </div>
            </div>
          </div>
          <div className="column is-three-fifths">
            <ImageChanger images={imageList} />
          </div>
          <Boxes className="column is-two-fifths">
            <div className="box">
              <Box>
                <PriceText>Cena za osobę: </PriceText>
                <Price>{price}</Price>
              </Box>
            </div>
            <div className="box">
              <Box>
                <PriceText>{persones}</PriceText>
              </Box>
            </div>
            <div className="box">
              <Box>
                <Price>{days}</Price>
              </Box>
            </div>
          </Boxes>
          <div className="column is-full">
            <Description>Description</Description>
            <div>{description}</div>
            <Description>Region</Description>
            <div>{region}</div>
            <Description>Wyposażenie</Description>
            <ul style={{ listStyleType: 'circle' }}>
              {actions.map(i => (
                <li>{i}</li>
              ))}
            </ul>
            <Description>Pokoje</Description>
            <ul style={{ listStyleType: 'circle' }}>
              {rooms.map(i => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
          <div className="column is-full section">
            <div className="card">
              <header className="card-header">
                <div className="card-header-title is-size-4">
                  Zamówienie wstępne
                </div>
              </header>
              <div className="card-content">
                <div className="content">
                  <div className="columns is-multiline">
                    <div className="column is-half">
                      <label className="label">Imię</label>
                      <input className="input" />
                    </div>
                    <div className="column is-half">
                      <label className="label">Nazwisko</label>
                      <input className="input" />
                    </div>
                    <div className="column is-half">
                      <label className="label">Telefon</label>
                      <input className="input" />
                    </div>
                    <div className="column is-half">
                      <label className="label">Email</label>
                      <input className="input" />
                    </div>
                    <div className="column is-full">
                      <label className="label">Email</label>
                      <input className="textarea" />
                    </div>

                    <div
                      className="column is-full"
                      style={{ backgroundColor: '#e0e0e0' }}
                    >
                      <Box>
                        <PriceText className="is-uppercase">
                          Cena całkowita ({persones}):
                        </PriceText>
                        <Price>{price}</Price>
                      </Box>
                    </div>
                    <div className="column is-full has-text-centered">
                      <button className="button is-size-4 is-rounded is-link">
                        Dalej
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
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

export default compose(withConnect)(OfferTemplate);
