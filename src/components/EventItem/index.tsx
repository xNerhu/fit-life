import * as React from 'react';

import { shortMonths } from '~/constants';
import { formatTime } from '~/utils';
import {
  Root,
  DateInfo,
  Month,
  Day,
  Year,
  Container,
  Title,
  Subtitle,
} from './styles';

export interface Props {
  start: Date;
  end: Date;
  title: string;
}

export default class EventItem extends React.Component<Props, {}> {
  render() {
    const { start, end, title } = this.props;

    return (
      <Root>
        <DateInfo>
          <Month>{shortMonths[start.getMonth()]}</Month>
          <Day>{start.getDate()}</Day>
          <Year>{start.getFullYear()}</Year>
        </DateInfo>
        <Container>
          <Title>{title}</Title>
          <Subtitle>
            {formatTime(start)} — {formatTime(end)}
          </Subtitle>
        </Container>
      </Root>
    );
  }
}
