import * as React from 'react';
import { Link } from 'react-router-dom';

import { Root, Title, Logo, Container } from './styles';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <Root>
        <Logo />
        <Title>Projekt Fit Life</Title>
        <Container>
          <Link to="/start">Start</Link>
          <Link to="/about">O projekcie</Link>
          <Link to="/problem">O problemie</Link>
          <Link to="/team">Zespół</Link>
          <Link to="/events">Wydarzenia</Link>
          <Link to="/sponsors">Sponsorzy</Link>
          <Link to="/contact">Kontakt</Link>
        </Container>
      </Root>
    );
  }
}
