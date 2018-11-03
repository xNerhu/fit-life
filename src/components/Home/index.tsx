import * as React from 'react';

import { PRIMARY_COLOR } from '~/constants';
import Button from '../Button';
import Section from '../Section';
import { Start, StartContainer, StartTitle, StartSubtitle } from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Start>
          <StartContainer>
            <StartTitle>Projekt Fit Life</StartTitle>
            <StartSubtitle>Zmień swoje życie na lepsze</StartSubtitle>
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
          </StartContainer>
        </Start>
        xd
      </React.Fragment>
    );
  }
}
