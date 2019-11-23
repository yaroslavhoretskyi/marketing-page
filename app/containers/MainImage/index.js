/**
 *
 * Image
 *
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Search } from '../Search';

const Section = styled.section`
  background-image: url('https://wallpaperplay.com/walls/full/6/f/e/3065.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;

  && {
    .hero-body {
      display: flex;
      justify-content: center;
      align-items: center;

      .title {
        color: #ffa31a;
      }
    }
  }
`;

export function MainImage() {
  return (
    <>
      <Section className="hero image">
        <div className="hero-body">
          <div className="container">
            <div className="title is-size-2 has-text-centered">
              Biuro Podróży
            </div>
            <Search />
          </div>
        </div>
      </Section>
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

export default compose(withConnect)(MainImage);
