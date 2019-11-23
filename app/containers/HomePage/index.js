/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import Menu from 'containers/Menu';
import MainImage from 'containers/MainImage';
import Information from 'containers/Information';
import ImageCarousel from 'containers/ImageCarousel';
import MainMenu from 'containers/MainMenu';
import ItemList from '../ItemList';

export default function HomePage() {
  return (
    <>
      <Menu />
      <MainImage />
      <Information />
      <ImageCarousel />
      <MainMenu />
      <ItemList />
    </>
  );
}
