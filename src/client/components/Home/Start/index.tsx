import * as React from 'react';

import { PRIMARY_COLOR } from '@client/constants';
import Button from '@client/components/Button';
import { Root, Container, Logo, Title, Subtitle } from './styles';

export default class Start extends React.Component {
  render() {
    return (
      <Root>
        <Container>
          <Logo />
          <Title>Projekt Fit Life</Title>
          <Subtitle>Zmień swoje życie na lepsze</Subtitle>
          <Button
            variant="contained"
            background={PRIMARY_COLOR}
            foreground="#000"
            text="WEŹ UDZIAŁ"
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '-96px',
              transform: 'translateX(-50%)',
            }}
          />
        </Container>
      </Root>
    );
  }
}
