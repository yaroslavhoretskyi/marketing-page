/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import JobOffert from 'containers/JobOffert/Loadable';
import AboutUs from 'containers/AboutUs/Loadable';
import Contact from 'containers/Contact/Loadable';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyle from '../../global-styles';
import { OfferPage } from '../OfferPage';
import { InfoPage } from '../InfoPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/jobs" component={JobOffert} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/offer/:id" component={OfferPage} />
        <Route exact path="/info" component={InfoPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
