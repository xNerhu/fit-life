import * as React from 'react';

import Button from '@client/components/Button';
import { PRIMARY_COLOR } from '@client/constants';
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
        <Button
          variant="contained"
          background={PRIMARY_COLOR}
          foreground="#000"
          text="WEŹ UDZIAŁ"
          style={{ marginTop: 96 }}
        />
      </Root>
    );
  }
}
