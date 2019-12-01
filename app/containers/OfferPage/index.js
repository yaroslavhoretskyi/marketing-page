/**
 *
 * OfferPage
 *
 */

import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { compose } from 'redux';
import Menu from 'containers/Menu';
import { OfferTemplate } from '../OfferTemplate';
import Footer from '../Footer';

const imageList = [
  [
    'https://cdntravelplanet.pl/AYT57060/TUIZ/miniature650x367/turcja/alanya/konakli/titan-select_0.jpg?datago=1&t=637113965772969922',
    'https://cdntravelplanet.pl/AYT57060/TUIZ/miniature650x367/turcja/alanya/konakli/titan-select_1.jpg?datago=1&t=637113965772969922',
    'https://cdntravelplanet.pl/AYT57060/TUIZ/miniature650x367/turcja/alanya/konakli/titan-select_2.jpg?datago=1&t=637113965772969922',
    'https://cdntravelplanet.pl/AYT57060/TUIZ/miniature650x367/turcja/alanya/konakli/titan-select_3.jpg?datago=1&t=637113965772969922',
    'https://cdntravelplanet.pl/AYT57060/TUIZ/miniature650x367/turcja/alanya/konakli/titan-select_4.jpg?datago=1&t=637113965772969922',
  ],
  [],
  [],
  [],
];

const starList = [[1, 2, 3, 4, 5], [], [], []];
const nameList = ['Titan Select', [], [], []];
const priceList = ['1699 zł/os', [], [], []];
const personeList = ['2 dorosłych, bez dzieci', [], [], []];
const daysList = ['7 dni', [], [], []];
const regionList = ['RIWIERA TURECKA/TURCJA', [], [], []];
const roomList = [
  [
    'Pokój rodzinny FZX1: 3-4 os.  ok. 56 m2  ostatni, częściowy remont: 2019 r.  2 dwuosobowe pokoje oddzielone drzwiami  klimatyzacja: indywidualnie sterowana  sejf: za opłatą  minibar: woda, za opłatą  telefon  Wi-Fi: za opłatą  TV  wanna lub prysznic  WC  suszarka do włosów  balkon',
    'Pokój 2-osobowy DZX1: 1-3 os.  ok. 28 m2  wanna lub prysznic  ostatni, częściowy remont: 2019 r.  klimatyzacja: indywidualnie sterowana  sejf: za opłatą  minibar: woda, w cenie  telefon  Wi-Fi: za opłatą  TV  serwis sprzątający  WC  suszarka do włosów  balkon',
    'Pokój 2-osobowy DZX2: 2-4 os.  ok. 32 m2  prysznic  ostatni, częściowy remont: 2019 r.  klimatyzacja: indywidualnie sterowana  sejf: za opłatą  minibar: woda, w cenie  telefon  Wi-Fi: za opłatą  TV  serwis sprzątający  WC  suszarka do włosów  balkon',
  ],
  [],
  [],
  [],
];
const actionList = [
  [
    'recepcja',
    'kantor: w recepcji',
    'winda',
    'sala TV',
    'Wi-Fi: w recepcji/lobby, w cenie',
    'minimarket',
    'jubiler',
    'fryzjer',
    'lekarz',
    'pralnia: za opłatą',
    'serwis bagażowy',
    'parking: niestrzeżony',
    'sale konferencyjne: 2 ',
  ],
  [],
  [],
  [],
];
const descriptionList = [
  'Siostrzany hotel Titan Garden, jest dużo bardziej kameralny i spokojny, polecam go raczej dla osób dorosłych, chociaż rodziny z dziećmi mogą korzystać z infrastruktury w sąsiednim hotelu. Standard pokojów jest bardzo dobry, są jasne i pachnące, łazienki nie najnowsze, ale czyste. Do dyspozycji gości jest też bezpłatny basen kryty i dodatkowo płatna strefa SPA. Tuż przy hotelu jest kilka sklepów, kantor, apteka, a do centrum Konakli można dojść w kilkanaście minut i oddać się szaleństwom zakupów. Plaża hotelowa jest żwirkowo-piaszczysta, z zadaszeniami, na tyle szeroka, że znajdziemy dla siebie miejsca zarówno w cieniu jak też w słońcu. Polecam dla: dla rodzin z dziećmi poniżej 5 roku życia, dla par, dla seniorów, dla ceniących spokój i ciszę',
  [],
  [],
  [],
];

export const OfferPage = ({ match }) => {
  return (
    <>
      <Menu />
      <OfferTemplate
        imageList={imageList[match.params.id]}
        stars={starList[match.params.id]}
        name={nameList[match.params.id]}
        price={priceList[match.params.id]}
        persones={personeList[match.params.id]}
        days={daysList[match.params.id]}
        description={descriptionList[match.params.id]}
        region={regionList[match.params.id]}
        actions={actionList[match.params.id]}
        rooms={roomList[match.params.id]}
      />
      <Footer />
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

export default compose(withConnect)(OfferPage);
