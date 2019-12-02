/**
 *
 * Dropdown
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

export const Dropdown = ({ name }) => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(!isActive);
  };

  const numbers = Array.from(Array(10).keys());

  return (
    <>
      <div>{name}</div>
      <div className={classnames('dropdown', { 'is-active': isActive })}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            type="button"
            aria-controls="dropdown-menu"
            onClick={handleOnClick}
          >
            <span>2</span>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {numbers.map(i => (
              <label className="checkbox">
                <input type="checkbox" />
                {i}
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Dropdown);
