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
  background-image: url('https://centralpenn.aaa.com/sites/default/files/styles/large_xl/public/2019-06/Travel_Hero.jpg?itok=fOnfD80N');
  height: 600px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
const Second = styled.div`
  background-image: url('https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1540782331/aykon-hotel-by-roberto-cavalli-DUBAIHOTELS1018.jpg?itok=j_GBeU8m');
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  height: 600px;
`;
const Third = styled.div`
  background-image: url('https://blackplatinumgold.com/wp-content/uploads/2018/09/Serata-Rolex-Quisisana-Capri.jpg');
  height: 600px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
const Fours = styled.div`
  background-image: url('https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/45/47/45477_v5.jpeg');
  height: 600px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
const Fifth = styled.div`
  background-image: url('https://www.travelweekly.com/uploadedImages/All_TW_Art/2019/0805/T0805BEIZhaolongHotel_HR.jpg?n=1506&width=1540&height=866&mode=crop&Anchor=MiddleCenter');
  height: 600px;
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
