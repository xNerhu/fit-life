import * as React from 'react';

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
import { getDaysInMonth, getFirstDayOfMonth, getLastDayOfMonth } from '~/utils';

export interface Props {
  minYear: 2018;
  maxYear: 2019;
}

export default class Calendar extends React.Component<Props, {}> {
  private createTable() {
    const month = 11;
    const year = 2018;

    const firstDayOfCurrent = getFirstDayOfMonth(month, year);
    const lastDayOfCurrent = getLastDayOfMonth(month, year);
    const daysInCurrent = getDaysInMonth(month, year);

    const rowsCount = Math.ceil(
      (firstDayOfCurrent + 6 - lastDayOfCurrent + daysInCurrent) / 7,
    );

    const rows = [];

    for (let i = 0; i < rowsCount; i++) {
      const row = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0) {
          if (j >= firstDayOfCurrent) {
            row.push(j - firstDayOfCurrent + 1);
          } else {
            row.push(null);
          }
        } else {
          const day: number = rows[0][6] + j + 1 + 7 * (i - 1);

          if (day <= daysInCurrent) {
            row.push(day);
          } else {
            row.push(null);
          }
        }
      }

      rows.push(row);
    }

    return rows;
  }

  render() {
    const currentDay = new Date().getDate();

    return (
      <Root>
        <Bar>
          <PeriodButton>
            LIS 2018
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
            {this.createTable().map((data, key) => {
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
