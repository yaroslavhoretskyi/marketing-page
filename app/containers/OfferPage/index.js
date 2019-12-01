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
  [
    'https://cdntravelplanet.pl/AYT61080/TUIZ/miniature650x367/turcja/alanya/alanya/kleopatra-atlas_0.jpg?datago=1&t=637112156626813437',
    'https://cdntravelplanet.pl/AYT61080/TUIZ/miniature650x367/turcja/alanya/alanya/kleopatra-atlas_1.jpg?datago=1&t=637112156626813437',
    'https://cdntravelplanet.pl/AYT61080/TUIZ/miniature650x367/turcja/alanya/alanya/kleopatra-atlas_2.jpg?datago=1&t=637112156626813437',
    'https://cdntravelplanet.pl/AYT61080/TUIZ/miniature650x367/turcja/alanya/alanya/kleopatra-atlas_3.jpg?datago=1&t=637112156626813437',
    'https://cdntravelplanet.pl/AYT61080/TUIZ/miniature650x367/turcja/alanya/alanya/kleopatra-atlas_4.jpg?datago=1&t=637112156626813437',
  ],
  [
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_0.jpg?datago=1&t=637109936879832188',
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_1.jpg?datago=1&t=637109936879832188',
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_2.jpg?datago=1&t=637109936879832188',
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_3.jpg?datago=1&t=637109936879832188',
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_4.jpg?datago=1&t=637109936879832188',
  ],
  [
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_0.jpg?datago=1&t=637109936879832188',
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_1.jpg?datago=1&t=637109936879832188',
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_2.jpg?datago=1&t=637109936879832188',
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_3.jpg?datago=1&t=637109936879832188',
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_4.jpg?datago=1&t=637109936879832188',
  ],
  [
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_0.jpg?datago=1&t=637109936879832188',
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_1.jpg?datago=1&t=637109936879832188',
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_2.jpg?datago=1&t=637109936879832188',
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_3.jpg?datago=1&t=637109936879832188',
    'https://cdntravelplanet.pl/AYT41048/TUIZ/miniature650x367/turcja/side/colakli/grand-seker_4.jpg?datago=1&t=637109936879832188',
  ],
];

const starList = [
  [1, 2, 3, 4, 5],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1],
];
const nameList = [
  'Titan Select',
  'Kleopatra Atlas',
  'Grand Seker',
  'Sherwood Exclusive Lara (ex Sherwood Breezes)',
  'Club Shark',
];
const priceList = [
  '1699 zł/os',
  '1897 zł/os',
  '2100 zł/os',
  '2700 zł/os',
  '1869 zł/os',
];
const personeList = [
  '2 dorosłych, bez dzieci',
  '2 dorosłych, bez dzieci',
  '2 dorosłych, bez dzieci',
  '2 dorosłych, bez dzieci',
  '2 dorosłych, bez dzieci',
];
const daysList = ['7 dni', '10 dni', '4 dni', '7 dni', '7 dni'];
const regionList = [
  'RIWIERA TURECKA/TURCJA',
  'RIWIERA TURECKA/TURCJA',
  'RIWIERA TURECKA/TURCJA',
  'RIWIERA TURECKA/TURCJA',
  'RIWIERA TURECKA/TURCJA',
];
const roomList = [
  [
    'Pokój rodzinny FZX1: 3-4 os.  ok. 56 m2  ostatni, częściowy remont: 2019 r.  2 dwuosobowe pokoje oddzielone drzwiami  klimatyzacja: indywidualnie sterowana  sejf: za opłatą  minibar: woda, za opłatą  telefon  Wi-Fi: za opłatą  TV  wanna lub prysznic  WC  suszarka do włosów  balkon',
    'Pokój 2-osobowy DZX1: 1-3 os.  ok. 28 m2  wanna lub prysznic  ostatni, częściowy remont: 2019 r.  klimatyzacja: indywidualnie sterowana  sejf: za opłatą  minibar: woda, w cenie  telefon  Wi-Fi: za opłatą  TV  serwis sprzątający  WC  suszarka do włosów  balkon',
    'Pokój 2-osobowy DZX2: 2-4 os.  ok. 32 m2  prysznic  ostatni, częściowy remont: 2019 r.  klimatyzacja: indywidualnie sterowana  sejf: za opłatą  minibar: woda, w cenie  telefon  Wi-Fi: za opłatą  TV  serwis sprzątający  WC  suszarka do włosów  balkon',
  ],
  [
    'Pokój 2-osobowy DZX1: 1-3 os.  ok. 16 m2  widok na ogród lub basen  w budynku głównym,  ostatni, częściowy remont w 2014 roku  pokój dzienno-sypialny  klimatyzacja: w cenie  sejf: za opłatą  minibar: w cenie, woda  telefon  Wi-Fi: w cenie  TV sat.  radio  prysznic  WC  suszarka do włosów  balkon',
  ],
  [
    'Pokój ekonomiczny DZZ1: Pokoje ekonomiczne to dobry wybór dla osób, którym zależy na pobycie w hotelu w najniższej możliwej cenie. Pokoje mogą różnić się wielkością, lokalizacją lub wyposażeniem od tych znajdujących się w regularnej ofercie danego obiektu. Z reguły nie ma możliwości wymiany pokoju ekonomicznego na inny.',

    'Pokój rodzinny FZX1: 3-4 os.  ok. 35 m2  widok na ogród lub basen  w budynku głównym lub bocznym  balkon lub taras  2 dwuosobowe pokoje oddzielone drzwiami  klimatyzacja: indywidualnie sterowana  sejf: płatność gotówką, ok. 2 €  minibar: w cenie, woda  telefon  Wi-Fi: płatność gotówką, ok. 2 €/dzień  TV sat.  wanna lub prysznic  WC  suszarka do włosów',

    'Pokój 2-osobowy DZX1: 1-3 os.  ok. 18 m2  widok na ogród lub basen  balkon lub taras  wanna lub prysznic  w budynku głównym lub bocznym  klimatyzacja  sejf: płatność gotówką, ok. 2 €  Wi-Fi: płatność gotówką, ok. 2 €/dzień  TV sat.  WC  suszarka do włosów',

    'Pokój 2-osobowy DZX2: 2-4 os.  ok. 24 m2  widok na ogród lub basen  balkon  minibar: w cenie, woda  telefon  wanna  w budynku głównym lub bocznym  klimatyzacja  sejf: płatność gotówką, ok. 2 €  Wi-Fi: płatność gotówką, ok. 2 €/dzień  TV sat.  WC  suszarka do włosów',
  ],
  [
    'Pokój rodzinny FZX1: 2-4 os.  ok. 57 m2  boczny widok na morze  2 pomieszczenia połączone drzwiami  2 łazienki  klimatyzacja: centralnie sterowana  sejf: w cenie  minibar: w cenie, napoje bezalkoholowe i woda, uzupełnianie minibaru: codziennie  telefon  TV sat.  Wi-Fi: w cenie  room service: za opłatą  prysznic  WC  suszarka do włosów  balkon',

    'Pokój rodzinny FZX2: 2-4 os.  ok. 35 m2  boczny widok na morze  2 pomieszczenia połączone drzwiami przesuwnymi  klimatyzacja: centralnie sterowana  sejf: w cenie  minibar: w cenie, napoje bezalkoholowe i woda, uzupełnianie minibaru: codziennie  telefon  TV sat.  Wi-Fi: w cenie  room service: za opłatą  prysznic  WC  suszarka do włosów  balkon',

    'Pokój rodzinny FZX3: 2-4 os.  ok. 40 m2  2 pomieszczenia połączone drzwiami  klimatyzacja: centralnie sterowana  sejf: w cenie  minibar: w cenie, napoje bezalkoholowe i woda, uzupełnianie minibaru: codziennie  telefon  TV sat.  Wi-Fi: w cenie  room service: za opłatą  prysznic  WC  suszarka do włosów  balkon',

    'Pokój 2-osobowy z widokiem na morze DZM1: 1-4 os.  ok. 29 m2  widok na morze  klimatyzacja: centralnie sterowana  sejf: w cenie  minibar: w cenie, napoje bezalkoholowe i woda, uzupełnianie minibaru: codziennie  telefon  TV sat.  Wi-Fi: w cenie  room service: za opłatą  prysznic  WC  suszarka do włosów  balkon',

    'Pokój 2-osobowy DZX1: 1-4 os.  ok. 29 m2  klimatyzacja: centralnie sterowana  sejf: w cenie  minibar: w cenie, napoje bezalkoholowe i woda, uzupełnianie minibaru: codziennie  telefon  TV sat.  Wi-Fi: w cenie  room service: za opłatą  prysznic  WC  suszarka do włosów  balkon',

    'Pokój 2-osobowy DZX2:1-4 os.  ok. 29 m2  boczny widok na morze  klimatyzacja: centralnie sterowana  sejf: w cenie  minibar: w cenie, napoje bezalkoholowe i woda, uzupełnianie minibaru: codziennie  telefon  TV sat.  Wi-Fi: w cenie  room service: za opłatą  prysznic  WC  suszarka do włosów  balkon',
  ],
  [
    'Pokój rodzinny FZX1: 3-4 os.  ok. 56 m2  ostatni, częściowy remont: 2019 r.  2 dwuosobowe pokoje oddzielone drzwiami  klimatyzacja: indywidualnie sterowana  sejf: za opłatą  minibar: woda, za opłatą  telefon  Wi-Fi: za opłatą  TV  wanna lub prysznic  WC  suszarka do włosów  balkon',
    'Pokój 2-osobowy DZX1: 1-3 os.  ok. 28 m2  wanna lub prysznic  ostatni, częściowy remont: 2019 r.  klimatyzacja: indywidualnie sterowana  sejf: za opłatą  minibar: woda, w cenie  telefon  Wi-Fi: za opłatą  TV  serwis sprzątający  WC  suszarka do włosów  balkon',
    'Pokój 2-osobowy DZX2: 2-4 os.  ok. 32 m2  prysznic  ostatni, częściowy remont: 2019 r.  klimatyzacja: indywidualnie sterowana  sejf: za opłatą  minibar: woda, w cenie  telefon  Wi-Fi: za opłatą  TV  serwis sprzątający  WC  suszarka do włosów  balkon',
  ],
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
  [
    'recepcja',
    'kantor: w recepcji',
    'sejf: w recepcji, za opłatą',
    'winda',
    'sala TV',
    'taras',
    'Wi-Fi: w miejscach ogólnodostępnych, w cenie',
    'pralnia: za opłatą',
    'parking: w zależności od dostępności',
    'sala konferencyjna',
  ],
  [
    'recepcja: 24 h',
    'kantor: w recepcji',
    'winda',
    'ogród',
    'taras',
    'Wi-Fi: w recepcji/w lobby, w cenie; w pozostałych miejscach płatne gotówką ok. 2 €/dzień',
    'sklep z pamiątkami',
    'minimarket',
    'butik',
    'jubiler',
    'fryzjer',
    'pralnia: za opłatą',
    'lekarz',
    'amfiteatr',
  ],
  [
    'recepcja',
    'winda',
    'sala TV',
    'ogród',
    'taras',
    'sklep z pamiątkami',
    'sklepy',
    'minimarket',
    'butik',
    'jubiler',
    'fryzjer',
    'amfiteatr',
    'Wi-Fi: w całym hotelu, w cenie',
    'terminal internetowy: za opłatą',
    'pralnia: za opłatą',
    'serwis bagażowy',
    'parking: w zależności od dostępności',
    'sale konferencyjne: 5',
  ],
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
];
const descriptionList = [
  'Siostrzany hotel Titan Garden, jest dużo bardziej kameralny i spokojny, polecam go raczej dla osób dorosłych, chociaż rodziny z dziećmi mogą korzystać z infrastruktury w sąsiednim hotelu. Standard pokojów jest bardzo dobry, są jasne i pachnące, łazienki nie najnowsze, ale czyste. Do dyspozycji gości jest też bezpłatny basen kryty i dodatkowo płatna strefa SPA. Tuż przy hotelu jest kilka sklepów, kantor, apteka, a do centrum Konakli można dojść w kilkanaście minut i oddać się szaleństwom zakupów. Plaża hotelowa jest żwirkowo-piaszczysta, z zadaszeniami, na tyle szeroka, że znajdziemy dla siebie miejsca zarówno w cieniu jak też w słońcu. Polecam dla: dla rodzin z dziećmi poniżej 5 roku życia, dla par, dla seniorów, dla ceniących spokój i ciszę',
  'Godziny otwarcia barów i restauracji w hotelach mogą ulec zmianie w zależności od pory roku i pogody. W okresie zimowym zjeżdżalnie, aquaparki, baseny zewnętrzne i niektóre bary są zwykle nieczynne. Programy animacyjne mogą zostać ograniczone lub odbywać się wewnątrz hotelu.',
  'Godziny otwarcia barów i restauracji w hotelach mogą ulec zmianie w zależności od pory roku i pogody. W okresie zimowym zjeżdżalnie, aquaparki, zewnętrzne baseny i niektóre bary są zwykle nieczynne. Programy animacyjne mogą zostać ograniczone lub odbywać się wewnątrz hotelu.',
  'Hotel z przepięknym terenem i pysznym jedzeniem. Przy basenie możemy rozpieścić się pysznymi lodami na gałki lub z lodówki (jak w sklepie) i wyłożyć się na hamaku pod palmą. W głąb piaszczystej plaży wchodzi długie molo, oświetlone wieczorami, idealne na romantyczną randkę. Podczas dnia pary mogą aktywnie spożytkować czas i skorzystać z fitnessu , aerobiku, zumby, siłowni. Również dzieci nie będą się tu nudzić, mogą poszaleć na zjeżdżalniach, w dyskotece lub mini klubie. Polecam dla: dla rodzin z dziećmi poniżej 5 roku życia, dla rodzin z dziećmi powyżej 5 roku życia, dla par, dla seniorów, dla aktywnych, dla ceniących spokój i ciszę',
  'Siostrzany hotel Club Shark, jest dużo bardziej kameralny i spokojny, polecam go raczej dla osób dorosłych, chociaż rodziny z dziećmi mogą korzystać z infrastruktury w sąsiednim hotelu. Standard pokojów jest bardzo dobry, są jasne i pachnące, łazienki nie najnowsze, ale czyste. Do dyspozycji gości jest też bezpłatny basen kryty i dodatkowo płatna strefa SPA. Tuż przy hotelu jest kilka sklepów, kantor, apteka, a do centrum Konakli można dojść w kilkanaście minut i oddać się szaleństwom zakupów. Plaża hotelowa jest żwirkowo-piaszczysta, z zadaszeniami, na tyle szeroka, że znajdziemy dla siebie miejsca zarówno w cieniu jak też w słońcu. Polecam dla: dla rodzin z dziećmi poniżej 5 roku życia, dla par, dla seniorów, dla ceniących spokój i ciszę',
];

export const OfferPage = ({ match }) => (
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
