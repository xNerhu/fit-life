import * as React from 'react';

import Section from '@client/components/Section';
import { Triangle } from '../styles';
import { Background, Bold, Link } from './styles';

export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Background style={{ padding: '64px 0px', backgroundColor: '#eee' }}>
          <Section
            id="about"
            title="O projekcie"
            dividerColor="#000"
            style={{ marginTop: 0, color: '#000' }}
            horizontal
          >
            <Bold>Projekt Fit Life</Bold> to inicjatywa zachęcająca do&nbsp;
            <Bold>prowadzenia zdrowego trybu życia</Bold>, a tym samym walkę z
            szerzącym się problemem społecznym. Jednak nasz projekt nie
            ogranicza się jedynie do ćwiczeń i odpowiedniego odżywiania się,
            pokazuje też jak ważna jest sfera psychiczna. Te dwie pozornie
            odmienne strefy się od siebie różnią, ale jednak są od siebie
            zależne i chcemy, aby jak najwięcej osób zdało sobie z tego sprawę.
            Nasze działania polegają na&nbsp;
            <Bold>
              organizowaniu konferencji z ekspertami oraz ciekawymi ludźmi
            </Bold>
            , którzy tak jak my chcą się dzielić wiedzą w zakresie zmian swojego
            życia na lepsze. Oprócz zajęć teoretycznych prowadzimy również te,
            na których można razem z nami odkryć nowe ćwiczenia, lub spróbować
            swoich sił w dotąd nieznanych dziedzinach sportowych. Nasze
            działania są prowadzone głównie na terenie&nbsp;
            <Bold>województwa opolskiego</Bold>, ale planujemy poszerzyć ich
            zasięg. Jednak jeśli nie masz możliwości uczestniczyć w spotkaniach
            w tych okolicach, to nic straconego! Specjalnie&nbsp;
            <Bold>dla ciebie</Bold> przygotowaliśmy dwa programy&nbsp;
            <Link href="/oof">„100 dni”</Link>.
          </Section>
        </Background>
        <Triangle color="#eee" />
      </React.Fragment>
    );
  }
}
