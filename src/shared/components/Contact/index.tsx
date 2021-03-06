import * as React from 'react';

import Section from '../Section';
import Textfield from '../Textfield';
import Button from '../Button';
import Map from '../Map';
import { Root, Form, Info, InfoContainer, Label, Value } from './styles';

export default class Contact extends React.Component {
  render() {
    const schoolPos = {
      lat: 50.673393,
      lng: 17.924187,
    };

    return (
      <Section id="contact" title="Kontakt">
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
          <Info>
            <InfoContainer>
              <Label>E-MAIL</Label>
              <Value>+48 783623157</Value>
              <br />
              <Label>TELEFON</Label>
              <Value>projekt.fit.life@onet.pl</Value>
            </InfoContainer>
            <Map
              defaultCenter={schoolPos}
              markers={[schoolPos]}
              style={{ height: 'calc(100% - 95px)' }}
            />
          </Info>
        </Root>
      </Section>
    );
  }
}
