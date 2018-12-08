import Button from '@client/components/Button';
import { PRIMARY_COLOR } from '@client/constants';
import { Triangle } from '@client/styles';
import * as React from 'react';
import { Root, Text } from './styles';

export default class Motto extends React.Component {
  render() {
    return (
      <Root>
        <Triangle
          color="#fff"
          variant="top-left"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
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
        <Triangle
          color="#fff"
          variant="bottom-right"
          style={{ position: 'absolute', bottom: 0, right: 0 }}
        />
      </Root>
    );
  }
}
