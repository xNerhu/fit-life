import * as React from 'react';

import { PRIMARY_COLOR } from '~/constants';
import Button from '../Button';
import Section from '../Section';
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
        <Section title="Title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          facere labore doloremque sed dolor ipsum, ex cumque aperiam, nihil
          voluptate voluptatibus inventore recusandae! Optio et sed expedita
          eius placeat nesciunt?
        </Section>
      </React.Fragment>
    );
  }
}
