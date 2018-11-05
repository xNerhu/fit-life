import * as React from 'react';

import Section from '~/components/Section';
import EventItem from '~/components/EventItem';
import { SecondBackground } from '../styles';
import { EventsContainer } from './styles';

export default class Events extends React.Component {
  render() {
    const style = { paddingTop: 24 };

    return (
      <SecondBackground>
        <Section title="Nadchodzące wydarzenia" style={style} horizontal>
          <EventsContainer>
            <EventItem title="Spotkanie" start={new Date()} end={new Date()} />
          </EventsContainer>
        </Section>
      </SecondBackground>
    );
  }
}
