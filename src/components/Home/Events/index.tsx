import * as React from 'react';

import Section from '~/components/Section';
import EventItem from '~/components/EventItem';
import { SecondBackground } from '../styles';

export default class Events extends React.Component {
  render() {
    const style = { paddingTop: 24 };

    return (
      <SecondBackground>
        <Section title="Nadchodzące wydarzenia" style={style} horizontal>
          <EventItem date={new Date()} />
        </Section>
      </SecondBackground>
    );
  }
}
