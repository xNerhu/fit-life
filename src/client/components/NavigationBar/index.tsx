import * as React from 'react';
import { Link } from 'react-router-dom';

import { Root, Brand, Title, Logo, Container } from './styles';

export interface State {
  activated: boolean;
}

export default class NavigationBar extends React.Component<{}, State> {
  public state: State = {
    activated: false,
  };

  render() {
    const { activated } = this.state;

    return (
      <Root activated={activated}>
        <Brand activated={activated}>
          <Logo />
          <Title>Projekt Fit Life</Title>
        </Brand>
        <Container activated={activated}>
          <Link to="/start">Start</Link>
          <Link to="/about">O projekcie</Link>
          <Link to="/problem">O problemie</Link>
          <Link to="/team">Zespół</Link>
          <Link to="/events">Wydarzenia</Link>
          <Link to="/partnership">Współpraca</Link>
          <Link to="/contact">Kontakt</Link>
        </Container>
      </Root>
    );
  }
}
