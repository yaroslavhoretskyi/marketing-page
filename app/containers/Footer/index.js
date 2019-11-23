/**
 *
 * Footer
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { compose } from 'redux';

const FooterElement = styled.div`
  background-color: #ffa31a;
  height: 100px;
`;

const Div = styled.div`
  border-bottom-color: #000;
  border-bottom-width: 1px;
  border-bottom-style: solid;

  &:hover {
    color: #ffa31a;
  }
`;

export const Footer = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(!isActive);
  };

  const numbers = [
    'Bolesławiec, ul. Bielska 6A',
    'Brzeg Dolny, ul. Słowackiego 2B',
    'Głogów, ul. Kazimierza Sprawiedliwego 4',
    'Kamienna Góra, ul.Żeromskiego 1',
    'Legnica, pl. Klasztorny 2',
    'Lubań, pl. 3-go Maja 8',
    'Łomża, ul. Stary Rynek 18',
    'Strzegom, ul. Szkolna 10',
    'Świdnica, ul. Strzegomska 2',
    'Świebodzice, ul. Rynek 24',
    'Twardogóra, ul. Ratuszowa 1A',
    'Wałbrzych, ul. Wieniawskiego 70',
    'Włocławek, ul. Kilińskiego 3',
    'Wrocław, C.H. Korona',
    'Wrocław, Dom Handlowy Renoma',
    'Wrocław, Fashion Outlet',
    'Wrocław, Pasaż Grunwaldzki',
    'Wrocław, ul. Kościuszki 95/U1',
    'Wrocław, ul. Małopolska 36a/2',
    'Wrocław, ul. Miarki 6-10',
    'Wrocław, ul. Wawrzyniaka 2',
    'Zgorzelec, ul. Łużycka 33C',
    'Żory, ul. Centralna 27',
    'kujawsko-pomorskie',
    'Brodnica, ul. Strzelecka 4',
    'Bydgoszcz, Galeria Pomorska',
    'Grudziądz, ul. Chełmińska 4',
    'Toruń, ul. Św. Jakuba 21',
    'Toruń, ul. Ugory 2',
    'lódzkie',
    'Aleksandrów Łódzki, ul. Wojska Polskiego 12',
    'Brzeziny, ul. Sienkiewicza 13',
    'al. Bandurskiego 49',
    'Łódź, ul. Dąbrowskiego 91B',
    'Łódź, ul. Przybyszewskiego 176/178',
    'Łódź, ul. Szparagowa 7',
    'Łódź, ul. Zgierska 104a',
    'Pabianice, ul. Pułaskiego 1',
    'Wieluń, ul. Śląska 1',
    'lubelskie',
    'Chełm, ul. Lwowska 13s',
    'Lublin, al. Spółdzielczości Pracy 32',
    'Lublin, al. Tysiąclecia 3',
    'Lublin, ul. Narutowicza 21',
    'Lublin, ul. Pana Balcera 6a',
    'malopolskie',
    'Kraków, C.H. M1',
    'Kraków, ul. Felicjanek 27',
    'Kraków, ul. Królowej Jadwigi 184',
    'Krzeszowice, ul. Legionów Polskich 20',
    'Myślenice, ul. Kazimierza Wielkiego 27a',
    'Nowy Sącz, ul. Zygmuntowska 15',
    'Nowy Targ, ul. Waksmundzka 38',
    'Oświęcim, ul. Zaborska 4',
    'Tarnów, ul. Krakowska 25',
    'mazowieckie',
    'Białobrzegi, ul. Krakowska 80',
    'Błonie, ul. Traugutta 6',
    'Brwinów, ul. Grodziska 46',
    'Góra Kalwaria, ul. Kalwaryjska 12/2',
    'Grodzisk Mazowiecki, ul. Królewska 48',
    'Grójec, al. Niepodległości 19',
    'Grójec, ul. Piłsudskiego 19',
    'Janki k.Warszawy C.H. Janki',
    'Legionowo, ul. Stefana Batorego 13',
    'Piaseczno, ul. Grochowskiego 1',
    'Pionki, ul. Radomska 2',
    'Płock, ul. Nowy Rynek 1',
    'Radom, C.H. Leclerc',
    'Radom, ul. Koszarowa 1',
    'Radzymin, ul. Falandysza 10/59',
    'Stare Babice, ul. Pocztowa 1/5',
    'Warka, pl. Czarnieckiego 18',
    'Warszawa, C.H. Targówek',
    'Warszawa, C.H. Factory Annopol',
    'Warszawa, C.H. Galeria Pod Dębami',
    'Warszawa, C.H. Galeria Żoliborz',
    'Warszawa, C.H. Reduta',
    'Węgrów, ul. Rynkowa 6',
    'Wołomin, ul. Geodetów 2',
    'Ząbki, ul. Żeromskiego 22',
    'Zielonka, ul. Kolejowa 12',
    'Żyrardów, ul. Polskiej Organizacji Wojskowej 16',
    'opolskie',
    'Głubczyce, ul. 1 Maja 9',
    'Lewin Brzeski, ul. Hallera 2',
    'Opole, ul. Reymonta 27/1c',
    'Praszka, pl. Grunwaldzki 20',
    'podkarpackie',
    'Jarosław, ul. Poniatowskiego 52',
    'Krosno, C.H. Vivo',
    'Łańcut, ul. Rzeźnicza 2',
    'Tarnobrzeg, ul. Mickiewicza 1',
    'podlaskie',
    'Białystok, Outlet Center',
    'Białystok, ul. Warszawska 81',
    'Bielsk Podlaski, ul. Mickiewicza 48',
    'Grajewo, ul. Wojska Polskiego 44',
    'pomorskie',
    'Bydgoszcz, C.H. Galeria Miedzyń',
    'Bytów, ul. Wojska Polskiego 16',
    'Chojnice, C.H. Brama Pomorza',
    'Gdańsk, ul. Hynka 65',
    'Gdańsk, ul. Niepołomicka 32',
    'Gdańsk, ul. Słonimskiego 1/67',
    'Gdańsk, ul. Wodnika 79',
    'Gdańsk, ul. Kartuska 345B',
    'Gdynia, ul. Wielkokacka 6',
    'Kwidzyn, ul. Targowa 22/1B',
    'Lębork, pl. Pokoju 23-25',
    'Pruszków, ul. Prusa 21',
    'Reda, ul. Gdańska 62',
    'Rumia, ul. Sobieskiego 14a',
    'Słupsk, ul. Kopernika 37a',
    'Tczew, ul. Jagiellońska 31',
    'Wejherowo, ul. Obrońców Helu 3',
    'Władysławowo, ul. Hallera 2a',
    'slaskie',
    'Bielsko-Biała, pl. Wojska Polskiego 15',
    'Bielsko-Biała, ul. Partyzantów 44',
    'Buczkowice, ul. Legionów 136',
    'Bytom, ul. Chorzowska 59',
    'Bytom, ul. Frenzla 56',
    'Chorzów, ul. Bolesława Chrobrego 13',
    'Chorzów, ul. Hajducka 6',
    'Częstochowa, al. Kościuszki 6',
    'Częstochowa, C.H. Jagiellończycy',
    'Częstochowa, C.H. M1',
    'Dąbrowa Górnicza, ul. Morcinka 2',
    'Jastrzębie-Zdrój, ul. Piłsudskiego 25',
    'Katowice, ul. Damrota 4',
    'Katowice, ul. Jankego 15d',
    'Knurów, C.H. Stara Cegielnia',
    'Marklowice , ul. Wiosny Ludów 113',
    'Orzesze, ul. Rybnicka 9',
    'Racibórz, ul. Opawska 72A',
    'Rybnik, ul. Mikołaja Reja 4d/5',
    'Skoczów, ul. Fabryczna 9',
    'Sosnowiec, al. Zwycięstwa 9',
    'Świerklany, ul. Boryńska 1',
    'Tarnowskie Góry, ul. Piastowska 10',
    'Turza Śląska, ul. Powstańców 13',
    'Tychy, al. Bielska 107',
    'swietokrzyskie',
    'Kielce, C.H. Pasaż Świętokrzyski',
    'warminsko-mazurskie',
    'Elbląg, ul. 1 Maja 45',
    'Pisz, ul. Wojska Polskiego 5/3',
    'wielkopolskie',
    'Gniezno, ul. Grzybowo 29',
    'Gorzów Wielkopolski, ul. Górczyńska 23',
    'Kalisz, ul. Garbarska 2',
    'Oborniki Wielkopolskie, ul. Młyńska 7',
    'Pawłowice Śląskie, ul. Mickiewicza 17B',
    'Piła, Galeria IBI',
    'Poznań, C.H. M1',
    'Poznań, ul. Dąbrowskiego 75',
    'Poznań, ul. Górna Wilda 72',
    'Poznań, ul. Marcelińska 98',
    'Poznań, ul. Głogowska 16',
    'Szamotuły, ul. Poznańska 12',
    'Żnin, ul. 700-Lecia 25',
    'zachodniopomorskie',
  ];

  return (
    <FooterElement>
      <div className="container">
        <div classNam="section">
          <div className="columns has-text-centered">
            <div className="column">
              <div>Infolinia i rezerwacja</div>
              <div className="is-size-4">71 343 76 233</div>
            </div>
            <div className="column">
              <div>Jesteśmy do Państwa dyspozycji</div>
              <div>Pn-Pt: 8:00-23:00</div>
              <div>So-Nd: 9:00-23:00</div>
            </div>
            <div className="column">
              <div>Salony podróży</div>
              <div
                className={classnames('dropdown is-up', {
                  'is-active': isActive,
                })}
              >
                <div className="dropdown-trigger">
                  <button
                    className="button"
                    aria-haspopup="true"
                    type="button"
                    aria-controls="dropdown-menu"
                    onClick={handleOnClick}
                  >
                    <span>Znajdź Salony</span>
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div
                    className="dropdown-content"
                    style={{ overflow: 'auto', maxHeight: '13em' }}
                  >
                    {numbers.map(i => (
                      <Div>{i}</Div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterElement>
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

export default compose(withConnect)(Footer);
