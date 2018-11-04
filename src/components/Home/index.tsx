import * as React from 'react';

import { PRIMARY_COLOR, carouselItems } from '~/constants';
import Button from '../Button';
import Section from '../Section';
import Carousel from '../Carousel';
import Textfield from '../Textfield';
import Organizator from '../Organizator';
import Calendar from '../Calendar';
import {
  Start,
  StartContainer,
  StartTitle,
  StartSubtitle,
  Contact,
  ContactForm,
  ContactInfo,
  ContactLabel,
  ContactText,
  Organizators,
  SecondBackground,
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

        <Section title="O problemie i sposobach jego ograniczenia">
          <Carousel items={carouselItems} />
        </Section>

        <Section title="Prowadzący" style={{ marginTop: 96 }}>
          <Organizators>
            <Organizator
              name="Michał Ćwikła"
              avatar="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/42111772_2144814845758736_8576482737249058816_n.jpg?_nc_cat=110&_nc_ht=scontent.fktw1-1.fna&oh=3d04cb81e7897d2b4d592de8afdba290&oe=5C414CBF"
              socials={[
                {
                  type: 'facebook',
                  url:
                    'https://www.facebook.com/profile.php?id=100006907245664&ref=br_rs',
                },
              ]}
            />
            <Organizator
              name="Martyna Wiej"
              avatar="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/34838362_1052769738205144_1484576482612215808_n.jpg?_nc_cat=106&_nc_ht=scontent.fktw1-1.fna&oh=3b69bbd93f48970fa852bf17dc9f8b33&oe=5C82D8B9"
              socials={[
                {
                  type: 'facebook',
                  url:
                    'https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/',
                },
              ]}
            />
            <Organizator
              name="Mikołaj Palkiewicz"
              avatar="https://avatars3.githubusercontent.com/u/12050791?s=460&v=4"
              socials={[
                {
                  type: 'facebook',
                  url: 'https://www.facebook.com/mikolaj.palkiewicz',
                },
                {
                  type: 'github',
                  url: 'https://www.github.com/xNerhu',
                },
              ]}
            />
          </Organizators>
        </Section>

        <SecondBackground>
          <Section
            title="Nadchodzące wydarzenia"
            style={{ paddingTop: 24 }}
            horizontal
          >
            <Calendar />
          </Section>
        </SecondBackground>

        <Section title="Kontakt">
          <Contact>
            <ContactForm>
              <Textfield label="Nazwa firmy*" style={{ marginTop: 0 }} />
              <div>
                <Textfield
                  label="Telefon*"
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
              </div>
              <Textfield label="Temat" />
              <Textfield label="Treść" textArea />
              <Button
                style={{ marginLeft: 'auto', marginTop: 32 }}
                background="#2196F3"
                foreground="#fff"
                text="WYŚLIJ"
              />
            </ContactForm>
            <ContactInfo>
              <ContactText>
                Zespół Szkół Ogólnokształcących Nr 2 w Opolu,
                <br />
                Generała Kazimierza Pułaskiego 3, 45-048 Opole
              </ContactText>
              <br />
              <br />
              <ContactLabel>Telefon:</ContactLabel>
              <ContactText>+48 783623157</ContactText>
              <br />
              <ContactLabel>E-mail:</ContactLabel>
              <ContactText>projekt.fit.life@onet.pl</ContactText>
            </ContactInfo>
          </Contact>
        </Section>
      </React.Fragment>
    );
  }
}
