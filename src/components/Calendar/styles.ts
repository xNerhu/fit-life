import styled, { css } from 'styled-components';

import {
  shadows,
  robotoMedium,
  centerImage,
  robotoLight,
  centerBoth,
} from '~/mixins';
import { transparency, icons, PRIMARY_COLOR } from '~/constants';

export const Root = styled.div`
  width: 352px;
  background-color: #fff;
  border-radius: 4px;
  margin-left: auto;
  box-shadow: ${shadows(3)};
`;

export const Bar = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
`;

export const PeriodButton = styled.div`
  min-width: 64px;
  height: 36px;
  margin-left: 8px;
  padding-left: 12px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 14px;
  color: #000;
  cursor: pointer;

  ${robotoMedium()};

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const PeriodButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  opacity: ${transparency.light.inactiveIcon};
  background-image: url(${icons.drop});

  ${centerImage('24px', 'auto')};
`;

export const ArrowsContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 8px;
`;

export const ArrowIcon = styled.div`
  width: 32px;
  height: 32px;
  opacity: ${transparency.light.inactiveIcon};
  background-image: url(${icons.arrow});
  margin-right: 8px;
  border-radius: 100%;
  cursor: pointer;

  ${centerImage('24px', 'auto')};

  ${({ direction }: { direction: 'left' | 'right' }) => css`
    transform: ${direction === 'left' ? 'unset' : 'rotate(180deg)'};
  `};

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }

  &:last-child {
    margin-right: 0px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  font-size: 13px;
`;

export const Th = styled.th`
  text-align: center;
  font-size: 11px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, ${transparency.light.dividers});

  ${robotoLight()};
`;

export const Td = styled.td`
  width: 14.2857%;
  padding-top: 7.14286%;
  padding-bottom: 7.14286%;
  position: relative;
  cursor: pointer;
`;

export const TdContent = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: background-color;
  transition: 0.15s background-color;
  color: rgba(0, 0, 0, ${transparency.light.primaryText});

  ${centerBoth()};

  ${({ selected }: { selected: boolean }) => css`
    background-color: ${selected ? PRIMARY_COLOR : 'unset'};

    ${!selected &&
      css`
        &:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }
      `};
  `};
`;
