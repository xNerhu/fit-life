import styled, { css } from 'styled-components';

import { transparency, icons } from '~/constants';
import { centerImage } from '~/mixins';

export const PeriodButton = styled.div`
  width: 144px;
  height: 40px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-left: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #000;
  overflow: hidden;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

export const PeriodButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-left: auto;
  margin-right: 8px;
  opacity: ${transparency.light.inactiveIcon};
  background-image: url(${icons.drop});

  ${centerImage('24px', 'auto')};
`;
