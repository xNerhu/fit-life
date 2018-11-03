import * as React from 'react';

import { PRIMARY_COLOR, transparency } from '~/constants';
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
        <Section
          title="O projekcie"
          vertical={false}
          style={{
            marginTop: 64,
            paddingBottom: 48,
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          facere labore doloremque sed dolor ipsum, ex cumque aperiam, nihil
          voluptate voluptatibus inventore recusandae! Optio et sed expedita
          eius placeat nesciunt? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quia eos, quae dolores earum officia optio quibusdam
          incidunt ipsam vel deserunt, voluptates, corporis placeat culpa
          delectus. Nobis, vitae deleniti. Est, ipsam? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Amet, earum quibusdam officia
          assumenda ipsam temporibus quos tenetur aut inventore, exercitationem
          repellendus dolores. Rerum, fugiat iusto. Necessitatibus illo
          quibusdam totam quae.
        </Section>
        <Section title="O problemie i sposobach jego ograniczenia">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          facere labore doloremque sed dolor ipsum, ex cumque aperiam, nihil
          voluptate voluptatibus inventore recusandae! Optio et sed expedita
          eius placeat nesciunt? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quia eos, quae dolores earum officia optio quibusdam
          incidunt ipsam vel deserunt, voluptates, corporis placeat culpa
          delectus. Nobis, vitae deleniti. Est, ipsam? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Amet, earum quibusdam officia
          assumenda ipsam temporibus quos tenetur aut inventore, exercitationem
          repellendus dolores. Rerum, fugiat iusto. Necessitatibus illo
          quibusdam totam quae.
        </Section>
      </React.Fragment>
    );
  }
}
