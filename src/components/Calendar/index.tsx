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

export interface Props {
  minYear: 2018;
  maxYear: 2019;
}

export default class Calendar extends React.Component<Props, {}> {
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
            <Th>PON</Th>
            <Th>WT</Th>
            <Th>ŚR</Th>
            <Th>CZW</Th>
            <Th>PT</Th>
            <Th>SOB</Th>
            <Th>NIED</Th>
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
