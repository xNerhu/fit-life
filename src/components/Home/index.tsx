import * as React from 'react';

import { PRIMARY_COLOR } from '~/constants';
import Button from '../Button';
import { Start, Header, SubHeader } from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Start>
          <Header>Projekt Fit Life</Header>
          <SubHeader>Zmień swoje życie na lepsze</SubHeader>
          <Button
            variant="outlined"
            borderColor={PRIMARY_COLOR}
            foreground={PRIMARY_COLOR}
            text="WEŹ UDZIAŁ"
            style={{
              marginTop: 32,
            }}
          />
        </Start>
        under header
      </React.Fragment>
    );
  }
}
