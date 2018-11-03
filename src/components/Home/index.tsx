import * as React from 'react';

import { PRIMARY_COLOR, carouselItems } from '~/constants';
import Button from '../Button';
import Section from '../Section';
import Carousel from '../Carousel';
import Textfield from '../Textfield';
import {
  Start,
  StartContainer,
  StartTitle,
  StartSubtitle,
  Contact,
  ContactForm,
  ContactInfo,
} from './styles';

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
        <Section
          title="O projekcie"
          style={{
            paddingBottom: 64,
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          }}
          horizontal
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem
          veniam voluptates, rerum quod eum molestiae dolorem perspiciatis
          repudiandae, et eligendi voluptatum saepe nisi maxime magnam. Numquam
          cumque veniam placeat.
        </Section>
        <Section
          title="O problemie i sposobach jego ograniczenia"
          style={{ paddingBottom: 32 }}
        >
          <Carousel items={carouselItems} style={{ marginTop: 16 }} />
        </Section>
        <Section title="Kontakt">
          <Contact>
            <ContactForm>
              <Textfield label="Nazwa*" style={{ marginTop: 0 }} />
              <Textfield
                label="Telefon"
                inputType="tel"
                style={{ width: 'calc(50% - 12px)' }}
                inline
              />
              <Textfield
                label="Email*"
                inputType="email"
                style={{ width: 'calc(50% - 12px)', marginLeft: 24 }}
                inline
              />
              <Textfield label="Temat" />
              <Textfield label="Treść" textArea />
            </ContactForm>
            <ContactInfo>info</ContactInfo>
          </Contact>
        </Section>
      </React.Fragment>
    );
  }
}
