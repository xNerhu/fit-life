import * as React from 'react';

import Section from '~/components/Section';
import EventItem from '~/components/EventItem';
import { events } from '~/content';
import { SecondBackground } from '../styles';
import { Container, EventsContainer } from './styles';

export default class Events extends React.Component {
  render() {
    const style = { paddingTop: 24 };

    const time = new Date().getTime();

    return (
      <SecondBackground>
        <Section title="Nadchodzące wydarzenia" style={style} horizontal>
          <Container>
            <EventsContainer>
              {events.map((data, key) => {
                const date = data.start;
                // TODO
                if (date.getTime() < time) {
                  return null;
                }
                return <EventItem data={data} key={key} />;
              })}
            </EventsContainer>
          </Container>
        </Section>
      </SecondBackground>
    );
  }
}
