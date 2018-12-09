import * as React from 'react';

import Section from '@client/components/Section';
import {
  Link,
  Items,
  ItemRoot,
  ItemIcon,
  ItemTitle,
  ItemContent,
} from './styles';
import { icons } from '@client/constants';
import { Bold } from '@client/components/Section/styles';

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
        najwięcej osób zdało sobie z tego sprawę. Nasze działania polegają
        na&nbsp;
        <Bold>
          organizowaniu konferencji z ekspertami oraz ciekawymi ludźmi
        </Bold>
        , którzy tak jak my chcą się dzielić wiedzą w zakresie zmian swojego
        życia na lepsze. Oprócz zajęć teoretycznych prowadzimy również te, na
        których można razem z nami odkryć nowe ćwiczenia, lub spróbować swoich
        sił w dotąd nieznanych dziedzinach sportowych. Nasze działania są
        prowadzone głównie na terenie&nbsp;
        <Bold>województwa opolskiego</Bold>, ale planujemy poszerzyć ich zasięg.
        Jednak jeśli nie masz możliwości uczestniczyć w spotkaniach w tych
        okolicach, to nic straconego! Specjalnie&nbsp;
        <Bold>dla ciebie</Bold> przygotowaliśmy dwa&nbsp;
        <Link href="/oof">programy szkoleniowe</Link>.
        <Items>
          <Item title="Konferencje" icon={icons.presentation}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            optio corporis itaque ducimus earum impedit pariatur voluptas
            dolore. Accusamus architecto, impedit est molestias officia quisquam
            quod accusantium nesciunt quaerat? Inventore.
          </Item>
          <Item title="Zajęcia sportowe" icon={icons.sport}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            optio corporis itaque ducimus earum impedit pariatur voluptas
            dolore. Accusamus architecto, impedit est molestias officia quisquam
            quod accusantium nesciunt quaerat? Inventore.
          </Item>
        </Items>
      </Section>
    );
  }
}
