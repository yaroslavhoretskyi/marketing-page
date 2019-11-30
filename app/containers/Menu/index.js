/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/**
 *
 * Menu
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classnames from 'classnames';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Menu() {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(!isActive);
  };

  const Item = styled.div`
    &:hover {
      font-weight: 600;
    }
  `;

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="Logo"
            />
          </div>

          <div
            role="button"
            className={classnames('navbar-burger burger', {
              'is-active': isActive,
            })}
            aria-label="menu"
            onClick={() => handleOnClick()}
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>

        <div
          id="navbarBasicExample"
          className={classnames('navbar-menu', { 'is-active': isActive })}
        >
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Strona główna
            </Link>

            <Link className="navbar-item">Informacje</Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Item className="navbar-link">Więcej</Item>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/about-us">
                  O nas
                </Link>
                <Link className="navbar-item" to="/jobs">
                  Praca
                </Link>
                <Link className="navbar-item" to="/contact">
                  Kontakt
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="button is-primary">
                  <strong>Sign up</strong>
                </div>
                <div className="button is-light">Log in</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
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

export default compose(withConnect)(Menu);
