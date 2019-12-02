/**
 *
 * Image
 *
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Badge } from 'react-bootstrap';
import { Search } from '../Search';

const Section = styled.section`
  background-image: url('https://i.imgur.com/W0woZph.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;

  && {
    .hero-body {
      display: flex;
      justify-content: center;
      align-items: center;

      .title {
        color: #fad066;
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
              <Badge variant="dark" style={{ margin: '10px' }}>
                PRESTISSMO
              </Badge>
              <br />
              <Badge variant="dark" style={{ margin: '10px' }}>
                Podróż życia w 5 minut!
              </Badge>
            </div>
            <div>
              <Search />
            </div>
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
