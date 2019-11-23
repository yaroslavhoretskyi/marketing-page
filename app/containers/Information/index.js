/**
 *
 * Information
 *
 */

import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { compose } from 'redux';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 10px;
`;

export function Information() {
  return (
    <div className="container has-text-centered">
      <div className="section">
        <div className="columns">
          <div className="column">
            <Div>
              <figure className="image is-32x32">
                <img
                  src="https://www.travelplanet.pl/Content/img/svg/palms.svg"
                  alt="palma"
                />
              </figure>
            </Div>
            <div className="label is-size-6">
              Najszersza oferta biur podróży
            </div>
            <div className="is-size-7">
              Wszyscy najwięksi organizatorzy w jednym miejscu!
            </div>
          </div>
          <div className="column">
            <Div>
              <figure className="image is-32x32">
                <img
                  src="https://www.travelplanet.pl/Content/img/svg/price-discount.svg"
                  alt="palma"
                />
              </figure>
            </Div>
            <div className="label is-size-6">Gwarancja ceny</div>
            <div className="is-size-7">
              Wycieczki kosztują dokładnie tyle, ile u organizatorów. Porównaj i
              oszczędź!
            </div>
          </div>
          <div className="column">
            <Div>
              <figure className="image is-32x32">
                <img
                  src="https://www.travelplanet.pl/Content/img/svg/badge-thumb.svg"
                  alt="palma"
                />
              </figure>
            </Div>
            <div className="label is-size-6">1,9 mln zadowolonych klientów</div>
            <div className="is-size-7">
              Gwarantujemy bezpieczne wakacje od 2001 r. Bądź spokojny o swój
              wypoczynek!
            </div>
          </div>
          <div className="column">
            <Div>
              <figure className="image is-32x32">
                <img
                  src="https://www.travelplanet.pl/Content/img/svg/multichannel.svg"
                  alt="palma"
                />
              </figure>
            </Div>
            <div className="label is-size-6">Rezerwuj tak jak lubisz</div>
            <div className="is-size-7">
              Kupuj online, telefonicznie lub w jednym z ponad 150 salonów
              podróży.
            </div>
          </div>
        </div>
      </div>
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

export default compose(withConnect)(Information);
