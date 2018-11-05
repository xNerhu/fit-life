import * as React from 'react';

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
  date: Date;
}

export default class EventItem extends React.Component<Props, {}> {
  render() {
    const { date } = this.props;

    return (
      <Root>
        <DateInfo>
          <Month>STY</Month>
          <Day>10</Day>
          <Year>2018</Year>
        </DateInfo>
        <Container>
          <Title>Event title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Root>
    );
  }
}
