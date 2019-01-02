import * as React from 'react';

import Button from '@shared/components/Button';
import { PRIMARY_COLOR } from '@shared/constants';
import { Root, Content, Title, Subtitle } from './styles';

export default class Start extends React.Component {
  render() {
    return (
      <Root id="start">
        <Content>
          <Title id="start-title">PROJEKT FIT LIFE</Title>
          <Subtitle>Zmień swoje życie na lepsze</Subtitle>
          <a href="https://www.facebook.com/pfitlife/" target="_blank">
            <Button
              variant="outlined"
              foreground={PRIMARY_COLOR}
              borderColor={PRIMARY_COLOR}
              text="NASZE PROGRAMY"
              style={{ marginTop: 36 }}
            />
          </a>
        </Content>
      </Root>
    );
  }
}
