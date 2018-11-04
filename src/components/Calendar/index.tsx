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
import { getDaysInMonth } from '~/utils';

export interface Props {
  minYear: 2018;
  maxYear: 2019;
}

export default class Calendar extends React.Component<Props, {}> {
  componentDidMount() {
    const days = getDaysInMonth(11, 2018);

    console.log(days);
  }

  render() {
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
            <tr>
              <Td>
                <TdContent>1</TdContent>
              </Td>
              <Td>
                <TdContent>2</TdContent>
              </Td>
              <Td>
                <TdContent>3</TdContent>
              </Td>
              <Td>
                <TdContent>4</TdContent>
              </Td>
              <Td>
                <TdContent>5</TdContent>
              </Td>
              <Td>
                <TdContent>6</TdContent>
              </Td>
              <Td>
                <TdContent>7</TdContent>
              </Td>
            </tr>
          </tbody>
        </Table>
      </Root>
    );
  }
}
