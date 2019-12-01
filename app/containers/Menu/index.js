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
import { NavLink } from 'react-router-dom';

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
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/s2048x2048/79004074_439486490060420_5995817385083273216_n.png?_nc_cat=101&_nc_ohc=dzptC0AmkfMAQlPNrZzVp1h5PibG63AGQJgL_ByeRHWFgpz3I8hcz03Ag&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&oh=966239a84b4671fc64e0e86b7bcdf472&oe=5E75413A"
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
            <Item className="navbar-item">
              <NavLink to="/">Główna strona</NavLink>
            </Item>

            <Item className="navbar-item">
              <NavLink to="/info">Informacja</NavLink>
            </Item>

            <div className="navbar-item has-dropdown is-hoverable">
              <Item className="navbar-link">More</Item>

              <div className="navbar-dropdown">
                <Item className="navbar-item">O nas</Item>
                <Item className="navbar-item">Praca</Item>
                <Item className="navbar-item">Kontakty</Item>
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
