import * as React from 'react';

import { getCalendarDays } from '~/utils';
import { IEvent } from '~/interfaces';
import {
  Root,
  Bar,
  PeriodButton,
  PeriodButtonIcon,
  ArrowIcon,
  ArrowsContainer,
  Table,
  Th,
  Td,
  TdContent,
} from './styles';

export interface Props {
  events: IEvent[];
}

interface State {
  date?: {
    month: number;
    year: number;
  };
}

export default class Calendar extends React.Component<Props, State> {
  public componentWillMount() {
    const current = new Date();

    this.setState({
      date: {
        month: current.getMonth(),
        year: current.getFullYear(),
      },
    });
  }

  render() {
    const { events } = this.props;
    const { date } = this.state;

    const currentDay = new Date().getDate();
    const eventsList = events.filter(
      e =>
        e.start.getMonth() === date.month &&
        e.start.getFullYear() === date.year,
    );

    return (
      <Root>
        <Bar>
          <PeriodButton>
            LISTOPAD 2018
            <PeriodButtonIcon />
          </PeriodButton>
          <ArrowsContainer>
            <ArrowIcon direction="left" />
            <ArrowIcon direction="right" />
          </ArrowsContainer>
        </Bar>
        <Table>
          <thead>
            <tr>
              <Th>PON</Th>
              <Th>WT</Th>
              <Th>ŚR</Th>
              <Th>CZW</Th>
              <Th>PT</Th>
              <Th>SOB</Th>
              <Th>NIED</Th>
            </tr>
          </thead>
          <tbody>
            {getCalendarDays(11, 2018).map((data, key) => {
              return (
                <tr key={key}>
                  {data.map((day, key2) => {
                    return (
                      <Td
                        key={key2}
                        style={{
                          pointerEvents: day == null ? 'none' : 'auto',
                        }}
                      >
                        {day && (
                          <TdContent selected={day === currentDay}>
                            {day}
                          </TdContent>
                        )}
                      </Td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Root>
    );
  }
}
