/* eslint-disable react/button-has-type */
/**
 *
 * TravelDirection
 *
 */

import React, { useState } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { compose } from 'redux';

const groupList = ['Wyspy Kanaryjskie', 'Bez paszportu', 'Egzotyka'];

const popularList = [
  'Grecja',
  'Turcja',
  'Hiszpania',
  'Bułgaria',
  'Egipt',
  'Włochy',
  'Wyspy Kanaryjskie',
];

const alphabeticalList = [
  'Albania',
  'Andora',
  'Bośnia I Hercegowina',
  'Brazylia',
  'Bułgaria',
  'Chiny',
  'Chorwacja',
  'Cypr',
  'Czarnogóra',
  'Czechy',
  'Dominikana',
  'Egipt',
  'Emiraty Arabskie',
  'Filipiny',
  'Gambia',
  'Grecja',
  'Gruzja',
  'Hiszpania',
  'Indie',
  'Indonezja',
  'Islandia',
  'Izrael',
  'Jamajka',
  'Japonia',
  'Jordania',
  'Karaiby',
  'Katar',
  'Kenia',
  'Kostaryka',
  'Kuba',
  'Liban',
  'Macedonia Północna',
  'Madagaskar',
  'Malediwy',
  'Malezja',
  'Malta',
  'Maroko',
  'Mauritius',
  'Meksyk',
  'Oman',
  'Panama',
  'Polinezja Francuska',
  'Portugalia',
  'Republika Południowej Afryki',
  'Rosja',
  'Seszele',
  'Sri Lanka',
  'Stany Zjednoczone',
  'Tajlandia',
  'Tanzania',
  'Tunezja',
  'Turcja',
  'Ukraina',
  'Węgry',
  'Wietnam',
  'Włochy',
  'Wyspy Kanaryjskie',
  'Wyspy Zielonego Przylądka',
];

const Dropdown = styled.div`
  && {
    .dropdown-menu {
      min-width: 500px;

      .dropdown-content {
        .column {
          max-height: 300px;
          overflow: auto;
        }
      }
    }

    .columns {
      margin-top: 5px;

      .checkbox {
        width: 100%;
      }
    }
  }
`;

export function TravelDirection() {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div>Kierunek podróży/hotel</div>
      <Dropdown className={classnames('dropdown', { 'is-active': isActive })}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={() => handleOnClick()}
          >
            <span>Kliknij, aby wybrać kierunek lub hotel</span>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <div>
                {/* Search */}
                <div className="control has-icons-left">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Search"
                  />
                  <span className="icon is-left">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>

                {/* columns */}
                <div className="columns">
                  <div className="column" style={{ overflow: 'auto' }}>
                    <div className="label">Grupy kierunków</div>
                    {groupList.map(group => (
                      <label className="checkbox">
                        <input type="checkbox" /> {group}
                      </label>
                    ))}
                    <div className="label">Najpopularniejsze</div>
                    {popularList.map(popular => (
                      <label className="checkbox">
                        <input type="checkbox" /> {popular}
                      </label>
                    ))}
                    <div className="label">Alfabetycznie</div>
                    {alphabeticalList.map(alphabetical => (
                      <label className="checkbox">
                        <input type="checkbox" /> {alphabetical}
                      </label>
                    ))}
                  </div>
                  <div className="column">
                    <div className="label">Regiony, miasta</div>
                    {alphabeticalList.map(alphabetical => (
                      <label className="checkbox">
                        <input type="checkbox" /> {alphabetical}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dropdown>
    </>
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

export default compose(withConnect)(TravelDirection);
