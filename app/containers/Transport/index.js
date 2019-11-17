/* eslint-disable react/button-has-type */
/**
 *
 * Transport
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faPlane,
  faCar,
  faBus,
} from '@fortawesome/free-solid-svg-icons';

export function Transport() {
  const Dropdown = styled.div`
    && {
      .button {
        min-width: 82px;
        span {
          min-width: 30px;
        }
        .icon {
          min-width: 25px;
        }
      }
    }
  `;

  const [value, setValue] = useState(faPlane);
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(!isActive);
  };

  const handleOnChange = e => {
    switch (e.target.value) {
      case 'faCar':
        setValue(faCar);
        break;
      case 'faPlane':
        setValue(faPlane);
        break;
      case 'faBus':
        setValue(faBus);
        break;
      default:
        setValue(faPlane);
    }
    setIsActive(false);
  };

  return (
    <>
      <div>Transport</div>
      <Dropdown className={classnames('dropdown', { 'is-active': isActive })}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={() => handleOnClick()}
          >
            <span>{<FontAwesomeIcon icon={value} />}</span>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div className="control">
              <div className="dropdown-item">
                <label className="radio">
                  <input
                    type="radio"
                    name="transport"
                    value="faPlane"
                    onChange={handleOnChange}
                    checked={value === faPlane}
                  />{' '}
                  <span className="icon has-icons-left">
                    <FontAwesomeIcon icon={faPlane} />
                  </span>
                  Samolot
                </label>
              </div>
              <div className="dropdown-item">
                <label className="radio">
                  <input
                    type="radio"
                    name="transport"
                    onChange={handleOnChange}
                    value="faCar"
                    checked={value === faCar}
                  />{' '}
                  <span className="icon has-icons-left">
                    <FontAwesomeIcon icon={faCar} />
                  </span>
                  Dojazd wlasny
                </label>
              </div>
              <div className="dropdown-item">
                <label className="radio">
                  <input
                    type="radio"
                    name="transport"
                    onChange={handleOnChange}
                    value="faBus"
                    checked={value === faBus}
                  />{' '}
                  <span className="icon has-icons-left">
                    <FontAwesomeIcon icon={faBus} />
                  </span>
                  Autokarem
                </label>
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

export default compose(withConnect)(Transport);
