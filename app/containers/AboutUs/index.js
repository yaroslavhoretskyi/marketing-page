/*
 * AboutUs
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Menu from 'containers/Menu';
import MainImage from 'containers/MainImage';
import Footer from '../Footer';
import {
  Jumbotron,
  Container,
  ListGroup,
  Image,
  Row,
  Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
              textAlign: 'justify',
            }}
          >
            <Container>
              <Row className="text-center">
                <Col>
                  <Image
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/s2048x2048/79004074_439486490060420_5995817385083273216_n.png?_nc_cat=101&_nc_ohc=dzptC0AmkfMAQlPNrZzVp1h5PibG63AGQJgL_ByeRHWFgpz3I8hcz03Ag&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&oh=966239a84b4671fc64e0e86b7bcdf472&oe=5E75413A"
                    width="50%"
                    style={{ paddingBottom: '20px' }}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <h1>O NAS</h1>

                  <p className="text-center">
                    <Image
                      src="https://assets-global.website-files.com/5ae17eb10974c57415c53e4b/5ae17eb10974c53c91c548b9_Why%20Big%20Companies%20Choose%20Not%20To%20Innovate_1F4E79.png"
                      width="70%"
                    />
                  </p>

                  <p>
                    Prestissimo to jeden z najlepszych portali turystyczny w
                    Polsce i dynamicznie rozwijająca się sieć salonów
                    stacjonarnych na terenie całego kraju. Marka powstała w 2019
                    roku jako pseudo wizytówka firmy stworzona przez dwóch
                    łodzkich studentów, gdzie zaraz po ponad 3 miesiącach stała
                    się fundamentem utworzenia spółki Prestissimo S.A.,
                    utrzymując pozycję lidera na rynku turystycznych usług
                    internetowych.
                  </p>
                  <p>
                    Kilkunastoletnie doświadczenie w branży turystycznej,
                    profesjonalne doradztwo w wyborze produktów i usług, szeroka
                    oferta, serwis internetowy z zaawansowaną wyszukiwarką, a
                    także dostępność doradców 7 dni w tygodniu i możliwość
                    rezerwacji oferty w kilku kanałach to tylko niektóre atuty,
                    które decydują o naszej przewadze konkurencyjnej.
                  </p>
                </Col>
                <Col>
                  <h2 align="center">Atrakcje turystyczne</h2>
                  <p>
                    Każdego dnia na naszych stronach internetowych prezentowane
                    są aktualne oferty największych i uznanych organizatorów
                    imprez turystycznych:
                  </p>

                  <ListGroup>
                    <ListGroup.Item style={{ background: '#FBD166' }}>
                      <FontAwesomeIcon icon={faCheck} /> wczasy i wycieczki
                      objazdowe
                    </ListGroup.Item>
                    <ListGroup.Item style={{ background: '#FBD166' }}>
                      <FontAwesomeIcon icon={faCheck} /> podróże egzotyczne
                    </ListGroup.Item>
                    <ListGroup.Item style={{ background: '#FBD166' }}>
                      <FontAwesomeIcon icon={faCheck} /> wyjazdy na narty
                    </ListGroup.Item>
                    <ListGroup.Item style={{ background: '#FBD166' }}>
                      <FontAwesomeIcon icon={faCheck} /> oferty Last Minute
                    </ListGroup.Item>
                    <ListGroup.Item style={{ background: '#FBD166' }}>
                      <FontAwesomeIcon icon={faCheck} /> kolonie i obozy
                    </ListGroup.Item>
                    <ListGroup.Item style={{ background: '#FBD166' }}>
                      <FontAwesomeIcon icon={faCheck} /> pobyty w SPA
                    </ListGroup.Item>
                  </ListGroup>

                  <h2 align="center" style={{ marginTop: '15px ' }}>
                    Bilety i ubezpieczenia
                  </h2>
                  <p>
                    W naszej ofercie znajdą Państwo również bilety lotnicze,
                    ubezpieczenia podróżne, parkingi przy lotniskach i bony
                    wakacyjne. Posiadamy również sieć stacjonarnych salonów
                    sprzedaży na terenie całego kraju. Prestissimo to również
                    unikalna baza opinii o hotelach i kierunkach, a także
                    największe turystyczne forum dyskusyjne, w którym codziennie
                    pojawiają się ciekawe tematy do dyskusji i relacje z
                    podróży.
                  </p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
      </div>
      <Footer />
    </>
  );
}
