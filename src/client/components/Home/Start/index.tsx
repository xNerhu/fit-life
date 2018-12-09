import * as React from 'react';

import Button from '@client/components/Button';
import { PRIMARY_COLOR } from '@client/constants';
import { Root, Content, Title, Subtitle } from './styles';

export default class Start extends React.Component {
  render() {
    return (
      <Root id="start">
        <Content>
          <Title id="start-title">PROJEKT FIT LIFE</Title>
          <Subtitle>Zmień swoje życie na lepsze</Subtitle>
          <Button
            variant="outlined"
            foreground={PRIMARY_COLOR}
            borderColor={PRIMARY_COLOR}
            text="WEŹ UDZIAŁ"
            style={{ marginTop: 36 }}
          />
        </Content>
      </Root>
    );
  }
}
