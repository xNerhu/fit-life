import * as React from 'react';

import { Title } from '@client/components/Section/styles';
import { Root, Container, Logo } from './styles';

export default class Sponsors extends React.Component {
  render() {
    return (
      <Root id="sponsors">
        <Title color="#000" dividerColor="#000" horizontal={false}>
          Sponsorzy
        </Title>
        <Container>
          <Logo />
        </Container>
      </Root>
    );
  }
}
