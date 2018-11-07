import * as React from 'react';

import { shortMonths } from '~/constants';
import { formatTime } from '~/utils';
import { IEvent } from '~/interfaces';
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
  data: IEvent;
}

export default class EventItem extends React.Component<Props, {}> {
  render() {
    const { start, end, title, link } = this.props.data;

    return (
      <Root href={link}>
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
