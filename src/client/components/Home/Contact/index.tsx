import * as React from 'react';

import Section from '@client/components/Section';
import Textfield from '@client/components/Textfield';
import Button from '@client/components/Button';
import { Root, Form, InfoContainer, ContactLabel, ContactText } from './styles';

export default class Contact extends React.Component {
  render() {
    return (
      <Section title="Kontakt">
        <Root>
          <Form>
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
          </Form>
          <InfoContainer>
            <ContactText>
              Zespół Szkół Ogólnokształcących Nr 2 w Opolu,
              <br />
              Generała Kazimierza Pułaskiego 3, 45-048 Opole
            </ContactText>
            <br />
            <br />
            <ContactLabel>Telefon:</ContactLabel>
            <ContactText style={{ float: 'right' }}>+48 783623157</ContactText>
            <br />
            <ContactLabel>E-mail:</ContactLabel>
            <ContactText style={{ float: 'right' }}>
              projekt.fit.life@onet.pl
            </ContactText>
            <div style={{ clear: 'both' }} />
          </InfoContainer>
        </Root>
      </Section>
    );
  }
}
