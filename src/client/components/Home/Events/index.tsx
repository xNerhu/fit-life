import * as React from 'react';

import Section from '@client/components/Section';
import { shortMonths } from '@client/constants';
import { formatTime } from '@client/utils';
import {
  EventItemRoot,
  DateInfo,
  Month,
  Day,
  Year,
  Container,
  Title,
  Subtitle,
} from './styles';

export interface Props {
  data: any;
}

export class EventItem extends React.Component<Props, {}> {
  render() {
    const { start, end, title, link } = this.props.data;

    // Don't render if an event is finished
    if (start.getTime() < new Date().getTime()) {
      return null;
    }

    return (
      <EventItemRoot href={link}>
        <DateInfo>
          <Month>{shortMonths[start.getMonth()]}</Month>
          <Day>{start.getDate()}</Day>
          <Year>{start.getFullYear()}</Year>
        </DateInfo>
        <Container>
          <Title>{title}</Title>
          <Subtitle>
            {start.getHours() !== 0 &&
              `${formatTime(start)} — ${formatTime(end)}`}
          </Subtitle>
        </Container>
      </EventItemRoot>
    );
  }
}

export default class Events extends React.Component {
  render() {
    return (
      <Section id="events" title="Nadchodzące wydarzenia">
        <EventItem
          data={{
            start: new Date(2018, 11, 17, 10, 30),
            end: new Date(2018, 11, 17, 10, 30),
            title: 'Inauguracja projektu',
          }}
        />
      </Section>
    );
  }
}
