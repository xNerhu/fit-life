import * as React from 'react';

import Button from '@client/components/Button';
import { PRIMARY_COLOR } from '@client/constants';
import { Triangle } from '../styles';
import { Root, Text, Logo } from './styles';

export default class Motto extends React.Component {
  render() {
    return (
      <Root>
        <Triangle color={PRIMARY_COLOR} />
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
        <Logo />
        <Button
          variant="contained"
          background={PRIMARY_COLOR}
          foreground="#000"
          text="WEŹ UDZIAŁ"
          style={{ marginTop: 24 }}
        />
      </Root>
    );
  }
}
