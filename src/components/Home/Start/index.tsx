import * as React from 'react';

import { PRIMARY_COLOR } from '~/constants';
import Button from '~/components/Button';
import { Container, Root, Title, Subtitle } from './styles';

export default class Start extends React.Component {
  render() {
    return (
      <Root>
        <Container>
          <Title>Projekt Fit Life</Title>
          <Subtitle>Zmień swoje życie na lepsze</Subtitle>
          <Button
            variant="outlined"
            borderColor={PRIMARY_COLOR}
            foreground={PRIMARY_COLOR}
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
