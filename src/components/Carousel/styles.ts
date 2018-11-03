import styled, { css } from 'styled-components';

import {
  centerHorizontal,
  centerImage,
  coverImage,
  shadows,
  centerVertical,
} from '~/mixins';
import { transparency, icons } from '~/constants';

export const Root = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: 4px;
  position: relative;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #212121;

  ${coverImage()};

  ${({ url }: { url: string }) => css`
    background-image: url(${url});
  `};
`;

export const ArrowIcon = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  filter: invert(100%);
  cursor: pointer;
  border-radius: 100%;
  background-image: url(${icons.arrow});
  opacity: ${transparency.light.activeIcon};

  ${centerImage('32px', 'auto')};
  ${centerVertical()};

  ${({ side }: { side: 'left' | 'right' }) => css`
    transform: ${side === 'right' ? 'rotate(180deg)' : 'unset'};
    left: ${side === 'left' ? '8px' : 'unset'};
    right: ${side === 'right' ? '8px' : 'unset'};
  `};

  &:hover {
    background-color: rgba(0, 0, 0, 0.16);
  }
`;

export const CirclesContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 24px;

  ${centerHorizontal()};
`;

export const Circle = styled.div`
  border-radius: 100%;
  margin-left: 8px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: ${shadows(4)};

  ${({ selected }: { selected: boolean }) => css`
    width: ${selected ? 14 : 12}px;
    height: ${selected ? 14 : 12}px;
    opacity: ${selected ? 1 : transparency.light.inactiveIcon};
  `};

  &:first-child {
    margin-left: 0px;
  }
`;
