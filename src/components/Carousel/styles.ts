import styled, { css } from 'styled-components';

import {
  centerHorizontal,
  centerImage,
  coverImage,
  shadows,
  centerVertical,
  centerBoth,
} from '~/mixins';
import { transparency, icons } from '~/constants';

export const Root = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: 4px;
  overflow: hidden;
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

export const TextContainer = styled.div`
  padding: 0px 96px;
  font-size: 16px;
  position: absolute;
  bottom: 72px;
  color: rgba(255, 255, 255, ${transparency.light.primaryText});
`;

export const CirclesContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 24px;

  ${centerHorizontal()};
`;

export const CircleElement = styled.div`
  border-radius: 100%;
  margin-left: 8px;
  cursor: pointer;
  position: relative;
  box-shadow: ${shadows(4)};

  ${({ selected }: { selected: boolean }) => css`
    width: ${selected ? 14 : 12}px;
    height: ${selected ? 14 : 12}px;
    background-color: rgba(
      255,
      255,
      255,
      ${selected ? 1 : transparency.light.inactiveIcon}
    );
  `};

  &:hover::before {
    content: '';
    width: 36px;
    height: 36px;
    display: block;
    position: absolute;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.12);

    ${centerBoth()};
  }

  &:first-child {
    margin-left: 0px;
  }
`;
