/**
 *
 * InfoPage
 *
 */

import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Menu } from '../Menu';
import { Footer } from '../Footer';

const Image = styled.div`
  background-image: url(${props => props.image});
  margin-left: 200px;
  width: 875px;
  height: 330px;
  margin-bottom: 50px;
`;

export function InfoPage() {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="section">
          <div className="title is-size-3 is-family-monospace">
            Jak rezerwować w PRESSTISIMO?
          </div>
          <Image image="https://www.travelplanet.pl/Content/img/contents/static-content/how-to-book/how-to-book-banner.jpg">
            <div className="is-size-3 has-text-right">
              ...szybko i przyjemnie
            </div>
          </Image>
          <div className="label is-family-monospace is-size-4">
            Tylko 5 kroków. Nic więcej.
          </div>

          <div className="columns is-multiline">
            <div
              className="column is-one-fifth"
              style={{ backgroundColor: '#f0f0f0' }}
            >
              <img src="https://www.travelplanet.pl/Content/img/contents/static-content/how-to-book/how-to-book-01.jpg" />
            </div>
            <div
              className="column is-four-fifths"
              style={{ backgroundColor: '#f0f0f0' }}
            >
              <div className="is-size-5">1. Znajdź i zamów wycieczkę </div>
              Nasza oferta dostępna jest nie tylko w serwisie PRESSTISI. Na
              kontakt z Tobą czekają również konsultanci Telefonicznego Centrum
              Rezerwacji (123 345 678) oraz doradcy w ponad 25 Salonach Podróży
              (znajdź salon).
            </div>
            <div className="column is-one-fifth">
              <img src="https://www.travelplanet.pl/Content/img/contents/static-content/how-to-book/how-to-book-02.jpg" />
            </div>
            <div className="column is-four-fifths">
              <div className="is-size-5">
                2. Rezerwacja online i kontakt doradcy
              </div>
              Po złożeniu zamówienia na wskazany e-mail otrzymasz potwierdzenie.
              W kolejnych krokach otrzymasz możliwość opłacenia rezerwacji.
              Opcjonalnie skontaktuje się z Tobą nasz konsultant, by potwierdzić
              koszt i dostępność miejsc na wybraną wycieczkę.
            </div>
            <div
              className="column is-one-fifth"
              style={{ backgroundColor: '#f0f0f0' }}
            >
              <img src="https://www.travelplanet.pl/Content/img/contents/static-content/how-to-book/how-to-book-03.jpg" />
            </div>
            <div
              className="column is-four-fifths"
              style={{ backgroundColor: '#f0f0f0' }}
            >
              <div className="is-size-5">3. Bezpieczna płatność</div>
              Umożliwiamy płatność online szyfrowaną certyfikatem SSL za
              pośrednictwem systemów Dotpay oraz PayByNet, a także przelewem
              tradycyjnym lub gotówką. Bezpieczeństwo transakcji jest naszym
              najwyższym priorytetem i jest gwarantowane jest przez Thawte®.
            </div>
            <div className="column is-one-fifth">
              <img src="https://www.travelplanet.pl/Content/img/contents/static-content/how-to-book/how-to-book-04.jpg" />
            </div>
            <div className="column is-four-fifths">
              <div className="is-size-5">
                4. Dostarczanie dokumentów podróżnych
              </div>
              Po zaksięgowaniu wpłaty nasz doradca potwierdzi rezerwację w
              systemie organizatora oraz prześle potwierdzenie wraz z umową i
              warunkami uczestnictwa. Zabierz je na lotnisko, ponieważ na jego
              podstawie - w hali odlotów, przy stanowisku organizatora -
              odbierzesz dokumenty podróży.
            </div>
            <div
              className="column is-one-fifth"
              style={{ backgroundColor: '#f0f0f0' }}
            >
              <img src="https://www.travelplanet.pl/Content/img/contents/static-content/how-to-book/how-to-book-05.jpg" />
            </div>
            <div
              className="column is-four-fifths"
              style={{ backgroundColor: '#f0f0f0' }}
            >
              <div className="is-size-5">5. Potwierdzenie godziny wylotu</div>
              Pamiętaj, aby 24 godziny przed podróżą skontaktować się z nami i
              potwierdzić godziny wylotów. Doradca Travelplanet.pl skontaktuje
              się z Państwem jeśli plan podróży ulegnie zmianie. Zawsze jesteśmy
              do Twojej dyspozycji: 123 456 789
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(InfoPage);
