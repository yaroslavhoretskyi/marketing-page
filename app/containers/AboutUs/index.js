/*
 * AboutUs
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import styled from 'styled-components';

import Menu from 'containers/Menu';
import MainImage from 'containers/MainImage';
// import Information from 'containers/Information';
// import ImageCarousel from 'containers/ImageCarousel';
// import MainMenu from 'containers/MainMenu';
// import ItemList from '../ItemList';
// import Hotel from '../Hotel';
// import Square from '../Square';
import Footer from '../Footer';
// import FooterPagePro from '../Footer/footer';

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

      <Footer />
    </>
  );
}
