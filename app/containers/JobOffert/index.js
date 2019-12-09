/*
 * JobOffert
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Menu from 'containers/Menu';
import MainImage from '../MainImage';
import Footer from '../Footer';
import { Container, Row, Col, Jumbotron, Image, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faSearch,
  faHandshake,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  return (
    <>
      <Menu />
      <MainImage />

      <div className="container">
        <div className="section">
          <Jumbotron
            fluid
            style={{
              background: 'none',
              borderRadius: 10,
              borderWidth: 1,
              fontFamily: 'Tahoma',
            }}
          >
            <Container>
              <Row>
                <Col align="center">
                  <h1 align="center">REKRUTACJA</h1>
                  <Image
                    width="50%"
                    src="http://s3.egospodarka.pl/grafika2/rekrutacja-pracownikow/Wolumenowa-rekrutacja-pracownikow-Jak-zachowac-standardy-195219-900x900.jpg"
                    rounded
                  />
                </Col>
              </Row>
              <Row
                className="justify-content-md-center"
                style={{ marginTop: '20px' }}
              >
                <Col xs lg="6" style={{ textAlign: 'justify' }}>
                  <p>
                    Jeśli tu zajrzałeś to oznacza, że chcesz z nami tworzyć
                    świat podróży wyjątkowych. Bardzo nas to cieszy!
                  </p>
                  <p>
                    Nawet jeśli nie znasz branży turystycznej to nic nie
                    szkodzi, na pewno masz dużą wiedzę w innej dziedzinie, którą
                    możesz się z nami podzielić. Jesteśmy pewni że zaszczepimy w
                    Tobie bakcyla podróżnika i razem z nami będziesz zwiedzać
                    świat!
                  </p>
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col>
                  <p style={{ textAlign: 'center' }}>
                    <FontAwesomeIcon size="3x" icon={faSearch} />
                  </p>
                  <h5>1. Sprawdź kogo potrzebujemy</h5>
                  <a href="#">Dostępne ogłoszenia o pracę</a>
                </Col>
                <Col>
                  <p style={{ textAlign: 'center' }}>
                    <FontAwesomeIcon size="3x" icon={faEnvelope} />
                  </p>
                  <h5>2. Aplikuj na wybrane stanowisko</h5>
                  <p>
                    Prześlij nam wypełniony formularz dostępny pod ogłoszeniem,
                    na które chcesz aplikować.
                  </p>
                </Col>
                <Col>
                  <p style={{ textAlign: 'center' }}>
                    <FontAwesomeIcon size="3x" icon={faHandshake} />
                  </p>
                  <h5>3. Spotkajmy się</h5>
                  <p>
                    Po pozytywnym rozpatrzeniu Twojej aplikacji będziemy chcieli
                    Cię bliżej poznać
                  </p>
                  <a href="#">Dowiedz się więcej</a>
                </Col>
                <Col>
                  <p style={{ textAlign: 'center' }}>
                    <FontAwesomeIcon size="3x" icon={faInfoCircle} />
                  </p>
                  <h5>4. Informacja zwrotna</h5>
                  <p>
                    Niezależnie od decyzji poinformujemy Cię o wyniku rekrutacji
                    telefonicznie lub mailowo.
                  </p>
                  <a href="#">Dowiedz się więcej</a>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
      </div>

      {/* <Information /> */}
      {/* <ImageCarousel /> */}
      {/* <MainMenu /> */}
      {/* <ItemList items={hotelList} line /> */}
      {/* <div className="container">
        <Text className="section is-paddingless has-text-centered">
          Wszystkie oferty >
        </Text>
      </div> */}
      {/* <ItemList items={squreItems} paddingless /> */}
      {/* <FooterPagePro/> */}
      <Footer />
    </>
  );
}
