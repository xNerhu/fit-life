import * as React from 'react';
import { Marker } from 'react-google-maps';

import Section from '@client/components/Section';
import Textfield from '@client/components/Textfield';
import Button from '@client/components/Button';
import GoogleMap from '@client/components/GoogleMap';
import { Root, Form, Info, InfoContainer, Label, Value } from './styles';

export default class Contact extends React.Component {
  render() {
    const schoolPos = {
      lat: 50.099139,
      lng: 18.550853,
    };

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
          <Info>
            <InfoContainer>
              <Label>E-MAIL</Label>
              <Value>+48 783623157</Value>
              <br />
              <Label>TELEFON</Label>
              <Value>projekt.fit.life@onet.pl</Value>
            </InfoContainer>
            <GoogleMap defaultCenter={schoolPos}>
              <Marker position={schoolPos} />
            </GoogleMap>
          </Info>
        </Root>
      </Section>
    );
  }
}
