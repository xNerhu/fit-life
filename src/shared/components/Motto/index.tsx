import * as React from 'react';

import Button from '../Button';
import { PRIMARY_COLOR } from '@shared/constants';
import { Root, Text } from './styles';

export default class Motto extends React.Component {
  render() {
    return (
      <Root>
        <Text>
          ZAWSZE DĄŻYMY DO CELU
          <br />
          NIGDY SIĘ NIE PODDAJEMY
          <br />
          CIĄGLE DZIAŁAMY
          <br />
          <br />
          TY TEŻ TAK MOŻESZ
          <br />
          DOŁĄCZ DO
          <br />
          PROJEKTU FIT LIFE
        </Text>
        <a href="https://www.facebook.com/pfitlife/" target="_blank">
          <Button
            variant="outlined"
            foreground={PRIMARY_COLOR}
            borderColor={PRIMARY_COLOR}
            text="NASZE PROGRAMY"
            style={{ marginTop: 96 }}
          />
        </a>
      </Root>
    );
  }
}
