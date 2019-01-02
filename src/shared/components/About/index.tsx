import * as React from 'react';

import { icons } from '@shared/constants';
import { Bold } from '../Section/styles';
import Section from '../Section';
import {
  Link,
  Items,
  ItemRoot,
  ItemIcon,
  ItemTitle,
  ItemContent,
} from './styles';

export interface ItemProps {
  title: string;
  icon: string;
}

export class Item extends React.Component<ItemProps, {}> {
  render() {
    const { title, icon, children } = this.props;

    return (
      <ItemRoot>
        <ItemIcon src={icon} />
        <ItemTitle>{title}</ItemTitle>
        <ItemContent>{children}</ItemContent>
      </ItemRoot>
    );
  }
}

export default class About extends React.Component {
  render() {
    return (
      <Section id="about" title="O projekcie">
        <Bold>Projekt Fit Life</Bold> to inicjatywa zachęcająca do&nbsp;
        <Bold>prowadzenia zdrowego trybu życia</Bold>, a tym samym walkę z
        szerzącym się problemem społecznym. Jednak nasz projekt nie ogranicza
        się jedynie do ćwiczeń i odpowiedniego odżywiania się, pokazuje też jak
        ważna jest sfera psychiczna. Te dwie pozornie odmienne strefy się od
        siebie różnią, ale jednak są od siebie zależne i chcemy, aby jak
        najwięcej osób zdało sobie z tego sprawę. Nasze działania są prowadzone
        głównie na terenie&nbsp;
        <Bold>województwa opolskiego</Bold>, ale planujemy poszerzyć ich zasięg.
        Jednak jeśli nie masz możliwości uczestniczyć w spotkaniach w tych
        okolicach, to nic straconego! Specjalnie&nbsp;
        <Bold>dla ciebie</Bold> przygotowaliśmy dwa&nbsp;
        <Link href="https://www.facebook.com/pfitlife/" target="_blank">
          programy szkoleniowe
        </Link>
        .
        <Items>
          <Item title="Konferencje" icon={icons.presentation}>
            Nasze działania polegają na organizowaniu konferencji z ekspertami
            oraz ciekawymi ludźmi, którzy tak jak my chcą się dzielić wiedzą w
            zakresie zmian swojego życia na lepsze. Zaproszeni przez nas
            psychologowie, fizjoterapeuci oraz trenerzy personalni na
            spotkaniach dadzą Wam dobre rady oraz odpowiedzą na Wasze pytania.
          </Item>
          <Item title="Zajęcia sportowe" icon={icons.sport}>
            Oprócz zajęć teoretycznych prowadzimy również te, na których można
            razem z nami odkryć nowe ćwiczenia. Zawsze chciałeś/chciałaś ćwiczyć
            zumbę, aerobik czy jogę, ale nigdy nie udało Ci się zacząć? Z nami
            możesz to zmienić wystarczy, że przyjdziesz na jedne ze spotkań i
            sprawdzisz się w proponowanych przez trenerów aktywnościach.
          </Item>
        </Items>
      </Section>
    );
  }
}
