import * as React from 'react';

import { PRIMARY_COLOR } from '~/constants';
import Button from '../Button';
import Section from '../Section';
import { Start, Footer } from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Start.Root>
          <Start.Title>Projekt Fit Life</Start.Title>
          <Start.Subtitle>Zmień swoje życie na lepsze</Start.Subtitle>
          <Button
            variant="outlined"
            borderColor={PRIMARY_COLOR}
            foreground={PRIMARY_COLOR}
            text="WEŹ UDZIAŁ"
            style={{
              marginTop: 32,
            }}
          />
        </Start.Root>
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
        <Section title="Wydarzenia">
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
        <Section title="Blog">
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
        <Section title="Kontakt">
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
        <Footer.Root>
          <Footer.Container>
            <Footer.Column>
              <Footer.Title>Organizatorzy</Footer.Title>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Kontakt</Footer.Title>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Bądź na bieżąco</Footer.Title>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Projekty</Footer.Title>
            </Footer.Column>
          </Footer.Container>
        </Footer.Root>
      </React.Fragment>
    );
  }
}
