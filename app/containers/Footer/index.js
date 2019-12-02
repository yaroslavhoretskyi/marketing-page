/**
 *
 * Footer
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CookieConsent from 'react-cookie-consent';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './footer.css';

const FooterElement = styled.div`
  background-color: #fbd166;
  height: auto;
`;

const agencies = numbers => (
  <DropdownButton
    id="agencies"
    title="Znajdź salon"
    drop="up"
    variant="black"
    key="up"
    size="sm"
  >
    {numbers.map(i => (
      <Dropdown.Item>{i}</Dropdown.Item>
    ))}
  </DropdownButton>
);

const phoneIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" padding->
    <path
      fillRule="evenodd"
      fill="#2449AD"
      d="M29.33 16.603c-.369 0-.669-.3-.669-.67v-.937c0-7.543-6.116-13.657-13.661-13.657h-.938c-.369 0-.669-.3-.669-.67 0-.369.3-.669.669-.669H15c8.284 0 15 6.714 15 14.996v.937c0 .37-.3.67-.67.67zM15 9.372h-.402c-.37 0-.669-.299-.669-.669 0-.37.299-.67.669-.67H15c3.846 0 6.964 3.118 6.964 6.963v.401c0 .37-.3.67-.669.67-.37 0-.67-.3-.67-.67v-.401c0-3.106-2.518-5.624-5.625-5.624zm10.312 6.963c-.369 0-.669-.3-.669-.67v-.669c0-5.324-4.317-9.64-9.643-9.64h-.67c-.369 0-.669-.3-.669-.67 0-.37.3-.669.669-.669H15c6.065 0 10.982 4.915 10.982 10.979v.669c0 .37-.3.67-.67.67zm-7.771 6.527c.959.277 1.832-.929 2.292-1.383 1.901-1.874 1.985-2.492 3.679-1.472l5.085 3.029c1.948 1.297-.914 5.114-2.957 6.152C16.451 33.742.933 18.098.017 8.791-.33 5.016 6.078-2.765 8.047 2.352l2.108 5.331c.967 2.972-2.412 3.598-2.416 5.138-.012 1.006 2.388 4.218 2.949 4.893 1.179 1.412 4.846 4.559 6.853 5.148z"
    />
  </svg>
);

const clockIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33">
    <path
      fillRule="evenodd"
      fill="#2449AD"
      d="M16.5 32.998C7.401 32.998 0 25.596 0 16.497 0 7.4 7.401-.002 16.5-.002c9.098 0 16.499 7.402 16.499 16.499C33 25.596 25.598 32.998 16.5 32.998zm0-31.114c-8.058 0-14.614 6.555-14.614 14.613 0 8.059 6.556 14.615 14.614 14.615s14.613-6.556 14.613-14.615C31.114 8.439 24.559 1.884 16.5 1.884zm4.393 20.34l-5.06-5.059c-.177-.178-.276-.417-.276-.668V5.793c0-.521.422-.943.944-.943.52 0 .942.421.942.943v10.314l4.783 4.784c.369.368.369.966 0 1.333-.367.368-.964.369-1.333 0z"
    />
  </svg>
);

const mapMarkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33">
    <path
      fillRule="evenodd"
      fill="#2449AD"
      d="M18 32.998c-11.817 0-18-2.571-18-5.11 0-2.261 4.412-4.361 10.73-5.106.329-.042.626.196.666.526.038.33-.197.629-.526.668-6.31.744-9.67 2.75-9.67 3.912 0 1.632 6.391 3.908 16.8 3.908s16.8-2.276 16.8-3.908c0-1.162-3.361-3.168-9.67-3.912-.329-.039-.564-.337-.526-.668.038-.33.336-.566.666-.526 6.317.745 10.73 2.845 10.73 5.106 0 2.539-6.183 5.11-18 5.11zm.007-5.15c-.408-.256-2.036-2.345-4.885-6.267-2.851-3.922-4.479-7.856-4.886-11.805.05-2.769 1.004-5.076 2.863-6.921 1.857-1.846 4.16-2.794 6.908-2.846 2.749.052 5.051 1 6.909 2.846 1.857 1.845 2.811 4.152 2.863 6.921-.408 3.949-2.036 7.883-4.886 11.805-2.851 3.922-4.479 6.011-4.886 6.267zm6.821-18.494c0-.883-.169-1.725-.472-2.499-3.613.446-6.49 1.334-6.49 2.499 0 1.164 2.877 2.052 6.49 2.498.303-.774.472-1.616.472-2.498zm-11.781 0c0-1.698 5.312-3.341 10.904-3.355-1.171-2.083-3.396-3.49-5.951-3.49-3.771 0-6.828 3.064-6.828 6.845 0 3.78 3.057 6.845 6.828 6.845 2.555 0 4.78-1.408 5.951-3.491-5.592-.014-10.904-1.657-10.904-3.354z"
    />
  </svg>
);

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
  ];

  return (
    <FooterElement>
      <CookieConsent
        flipButtons
        buttonText="Akceptuję"
        buttonStyle={{ background: '', color: 'black' }}
      >
        <span style={{ fontSize: '10px' }}>
          Ustawienia prywatności i plików cookies W celu poprawienia jakości
          usług, dostosowania zawartości strony do potrzeb użytkowników, a także
          korzystania z narzędzi analitycznych, reklamowych i społecznościowych,
          korzystamy z plików cookies i pochodnych technologii. Klikając
          przycisk „Akceptuję” lub pozostając na stronie, wyrażasz zgodę na
          przechowywanie plików cookies w Twoim urządzeniu, ich wykorzystywanie
          oraz przekazywanie informacji o zachowaniu w sieci w celu wyświetlania
          reklam personalizowanych w serwisach społecznościowych i na innych
          stronach.
        </span>
      </CookieConsent>
      <div className="container">
        <div classNam="section">
          <div
            className="columns has-text-centered"
            style={{ paddingTop: '10px' }}
          >
            <div className="column">
              <div style={{ paddingBottom: '10px' }}>{phoneIcon}</div>
              <b>INFOLINIA I REZERWACJA</b>
              <div className="is-size-6">12 345 67 890</div>
            </div>
            <div className="column">
              <div style={{ paddingBottom: '10px' }}>{clockIcon}</div>
              <div className="is-size-6">
                <b>GODZINY OTWARCIA</b>
              </div>
              <div className="is-size-7">Pn-Pt: 8:00-23:00</div>
              <div className="is-size-7">So-Nd: 9:00-23:00</div>
            </div>
            <div className="column">
              <div style={{ paddingBottom: '10px' }}>{mapMarkIcon}</div>
              <div className="is-size-6">
                <b>NASZE FILIE</b>
              </div>
              <div style={{ paddingBottom: '10px' }}>{agencies(numbers)}</div>
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
