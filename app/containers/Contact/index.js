/*
 * Contact
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
  InputGroup,
  FormControl,
  Form,
  Button,
} from 'react-bootstrap';

const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9879.476957981533!2d19.4517176!3d51.7537146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbe75c3beee4bad56!2zUG9saXRlY2huaWthIMWBw7Nkemth!5e0!3m2!1spl!2spl!4v1575823690569!5m2!1spl!2spl" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';


function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

export default function HomePage() {


  return (
    <>
      <Menu />
      <MainImage />

      <div className="container">
        <div className="section">
          <Container>
          <Row>
              <Col align="center">
                <h1>Mapa dojazdu</h1>
              <Iframe iframe={iframe} />
              
              </Col>
              </Row>
            <Row style={{ marginTop: '20px'}}>
              <Col xs lg="3">
                <p>
                  <h4>
                    <b>Adres firmy:</b>
                  </h4>
                </p>
                <ul>
                  <li>Dreamtours.pl</li>
                  <li>Tomasz Krzyżaniak</li>
                  <li>ul. Mściwoja II 50/18</li>
                  <li>80-357 Gdańsk-Oliwa</li>
                </ul>
                <ul>
                  <li>
                    <b>REGON: </b>123456789
                  </li>
                  <li>
                    <b>NIP: </b> 123-456-78-90
                  </li>
                </ul>
                <p>
                  <h4>
                    <b>Konta bankowe:</b>
                  </h4>
                </p>
                <ul>
                  <li>
                    <b>Konto PLN Mbank: </b>
                    <ul>
                      <li style={{ fontSize: '12px' }}>
                        00 0000 0000 0000 0000 0000 0000
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Konto PLN Inteligo: </b>
                    <ul>
                      <li style={{ fontSize: '12px' }}>
                        00 0000 0000 0000 0000 0000 0000
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li>
                    <b>Konto EUR Mbank: </b>
                    <ul>
                      <li style={{ fontSize: '12px' }}>
                        00 0000 0000 0000 0000 0000 0000
                      </li>
                    </ul>
                  </li>
                </ul>

                <p>
                  <h4>
                    <b>Skontaktuj się z nami:</b>
                  </h4>
                </p>
                <ul>
                  <li>
                    <b>TELEFON: </b>+48 12 345 67 89
                  </li>
                  <li>
                    <b>FAX: </b>+48 12 345 67 89
                  </li>
                  <li>
                    <b>EMAIL: </b>info@prestissimo.pl
                  </li>
                </ul>
              </Col>
              <Col>
                <Jumbotron>
                  <h1>Formularz zgłoszeniowy</h1>
                  <p>
                    Wyślij zgłoszenie, my oddzwonimy! Szybko i wygodnie -
                    szczegóły ustalimy razem!
                  </p>

                  <Form>
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="Imię" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Nazwisko" />
                      </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="E-mail" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Telefon" />
                      </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="Dokąd (kierunek podróży)" />
                      </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="Termin wyjazdu" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Termin powrotu" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Długość pobytu" />
                      </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="Ilość osób dorosłych" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Ilość dzieci" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Klasa hotelu (gwiazdki)" />
                      </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="Wyżywienie" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Lotniska wylotu" />
                      </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                      <Col>
                        <Form.Control
                          as="textarea"
                          placeholder="Uwagi"
                          rows="3"
                        />
                      </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                      <Col xs lg="1" align="center">
                        <Form.Check type="checkbox" />
                      </Col>
                      <Col>
                        <p>
                          Newsletter - chcę otrzymywać najlepsze oferty
                          wakacyjne na podanego wyżej maila (zaznaczając tę
                          opcję będziecie Państwo co 7-14 dni otrzymywać
                          najlepsze oferty na skrzynkę pocztową).
                        </p>
                      </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                      
                      <Col><p style={{textAlign: 'justify'}}>Administratorem danych jest Prestissimo.pl z siedzibą w Łodzi. Dane wpisane w formularzu kontaktowym będą przetwarzane w celu udzielenia odpowiedzi na przesłane zapytanie zgodnie z regulaminem polityki prywatności. </p></Col>
                      <Col xs lg='2' align="center">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Col>
                    </Form.Row>
                  </Form>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Footer />
    </>
  );
}
