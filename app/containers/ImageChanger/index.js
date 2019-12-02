/**
 *
 * ImageChanger
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';

const Item = styled.img`
  max-width: 90px;
  min-width: 90px;
  max-height: 65px;
  min-height: 65px;
  background-image: url(${props => props.image});
  margin-bottom: 7px;

  &:hover {
    cursor: pointer;
    border: 3px solid #f2d28d;
    border-radius: 10px;
  }
`;

const MainImage = styled.div`
  background-image: url(${props => props.image});
  width: 300px;
  height: 355px;
  min-width: 100px;
  min-height: 100px;
  margin-top: 12px;
`;

export const ImageChanger = ({ images }) => {
  const [clicked, setClicked] = useState(images[0]);

  const handleOnClick = item => {
    setClicked(item);
  };

  return (
    <div className="columns">
      <div className="column is-one-fifth">
        {images.map(i => (
          <div key={i.toString()} onClick={() => handleOnClick(i)}>
            <Item src={i} alt="hotel" />
          </div>
        ))}
      </div>
      <MainImage image={clicked} className="column is-four-fifths" />
    </div>
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

export default compose(withConnect)(ImageChanger);
