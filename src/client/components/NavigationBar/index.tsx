import * as React from 'react';
import { Link } from 'react-router-dom';

import { Root, Title, Logo, Container, Item } from './styles';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <Root>
        <Logo />
        <Title>Projekt Fit Life</Title>
        <Container>
          <Item>O projekcie</Item>
          <Item>O problemie</Item>
          <Item>Zespół</Item>
          <Item>Wydarzenia</Item>
          <Item>Sponsorzy</Item>
          <Item>Kontakt</Item>
        </Container>
      </Root>
    );
  }
}
