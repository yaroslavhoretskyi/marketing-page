/*
 * JobOffert
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import styled from 'styled-components';

import Menu from 'containers/Menu';
import MainImage from '../MainImage';
// import Information from 'containers/Information';
// import ImageCarousel from 'containers/ImageCarousel';
// import MainMenu from 'containers/MainMenu';
// import ItemList from '../ItemList';
// import Hotel from '../Hotel';
// import Square from '../Square';
import Footer from '../Footer';
// import FooterPagePro from '../Footer/footer';

// const hotelList = [
//   <Hotel
//     rating="4.4"
//     price="1 699 zł/os"
//     information="7 dni TUI Polska"
//     name="Titan Select"
//     picture="https://cdntravelplanet.pl/AYT57060/TUIZ/miniature275x155/turcja/alanya/konakli/titan-select_0.jpg?datago=1&t=637101869739491328"
//   />,
//   <Hotel
//     rating="4.1"
//     price="1 897 zł/os"
//     information="10 dni TUI Polska"
//     name="Kleopatra Atlas"
//     picture="https://cdntravelplanet.pl/AYT61080/TUIZ/miniature275x155/turcja/alanya/alanya/kleopatra-atlas_0.jpg?datago=1&t=637106108529344766"
//   />,
//   <Hotel
//     rating="4.2"
//     price="2 100 zł/os"
//     information="4 dni TUI Polska"
//     name="Grand Seker"
//     picture="https://cdntravelplanet.pl/AYT41048/TUIZ/miniature275x155/turcja/side/colakli/grand-seker_0.jpg?datago=1&t=637103024872531484"
//   />,
//   <Hotel
//     rating="4.8"
//     price="2 750 zł/os"
//     information="7 dni TUI Polska"
//     name="Sherwood Lara"
//     picture="https://cdntravelplanet.pl/BOJIZOL/ITAK/miniature275x155/bulgaria/sloneczny-brzeg/sloneczny-brzeg/izola-paradise_0.jpg"
//   />,
//   <Hotel
//     rating="4.1"
//     price="1 869 zł/os"
//     information="7 dni Itaka"
//     name="Club Shark"
//     picture="https://cdntravelplanet.pl/BJVSHAR/ITAK/miniature275x155/turcja/bodrum/gumbet/club-shark_0.jpg"
//   />,
// ];

// const squreItems = [
//   <Square
//     picture="http://www.nccp.org/publications/images/istock-839295596.jpg"
//     text="Dla rodzin z dziećmi"
//   />,

//   <Square
//     picture="https://ubr.ua/img/article/2082/81_m2.jpg"
//     text="Praca na wakacji"
//   />,

//   <Square
//     picture="https://marmarisavantaj.com/wp-content/uploads/2019/02/marmaris-dal%C4%B1S-turu-marmaris-tuplu-dal%C4%B1s-KUCUK-Urun-fotalar-7-min.jpg"
//     text="Dla aktywnych"
//   />,

//   <Square
//     picture="https://miridej.ru/images/pliaz-400x300.jpg"
//     text="Hotele przy plaźy"
//   />,
// ];

// const Text = styled.div`
//   color: #ffa31a;
//   font-size: 25px;
//   font-weight: 400;
//   && {
//     &:hover {
//       font-weight: 600;
//     }
//   }
// `;

export default function HomePage() {
  return (
    <>
      <Menu />
      <MainImage />
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