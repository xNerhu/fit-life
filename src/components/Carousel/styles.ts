import styled, { css } from 'styled-components';

import { centerHorizontal, centerImage, coverImage, shadows } from '~/mixins';
import { transparency } from '~/constants';

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
