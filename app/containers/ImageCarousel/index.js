/**
 *
 * Carousel
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Text = styled.div`
  color: #fff;
  font-weight: 600;
`;

const First = styled.div`
  background-image: url('https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg');
  height: 200px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
const Second = styled.div`
  background-image: url('https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg');
  height: 200px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
const Third = styled.div`
  background-image: url('https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg');
  height: 200px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
const Fours = styled.div`
  background-image: url('https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg');
  height: 200px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
const Fifth = styled.div`
  background-image: url('https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg');
  height: 200px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

export function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <First>
            <Text className="is-size-3">1 699 zł</Text>
          </First>
        </div>
        <div>
          <Second>
            <Text className="is-size-3">1 350 zł</Text>
          </Second>
        </div>
        <div>
          <Third>
            <Text className="is-size-3">2 500 zł</Text>
          </Third>
        </div>
        <div>
          <Fours>
            <Text className="is-size-3">3 000 zł</Text>
          </Fours>
        </div>
        <div>
          <Fifth>
            <Text className="is-size-3">1 999 zł</Text>
          </Fifth>
        </div>
      </Slider>
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

export default compose(withConnect)(ImageCarousel);
