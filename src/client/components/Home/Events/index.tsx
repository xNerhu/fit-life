import * as React from 'react';

import Section from '@client/components/Section';
import EventItem from '@client/components/EventItem';
import { events } from '@client/content';
import { Container, Background } from './styles';

export default class Events extends React.Component {
  render() {
    const style = { paddingTop: 24, paddingBottom: 24 };

    const time = new Date().getTime();

    return (
      <Background>
        <Section title="Nadchodzące wydarzenia" style={style}>
          <Container>
            {events.map((data, key) => {
              const date = data.start;
              // TODO
              if (date.getTime() < time) {
                return null;
              }
              return <EventItem data={data} key={key} />;
            })}
          </Container>
        </Section>
      </Background>
    );
  }
}
