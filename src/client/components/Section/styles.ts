import styled, { css } from 'styled-components';

import { transparency, MAX_SECTION_WIDTH } from '@client/constants';
import { robotoMedium } from '@client/mixins';

export const Root = styled.section`
  width: 100%;
  max-width: ${MAX_SECTION_WIDTH}px;
  margin: 0 auto;
  margin-top: 64px;
  display: flex;

  ${({ horizontal }: { horizontal: boolean }) => css`
    flex-direction: ${horizontal ? 'row' : 'column'};
  `};

  @media (max-width: ${MAX_SECTION_WIDTH}px) {
    flex-direction: column;
  }
`;

export interface TitleProps {
  horizontal: boolean;
  color: string;
  dividerColor: string;
}

export const Title = styled.div`
  height: fit-content;
  position: relative;
  padding-bottom: 24px;
  font-size: 34px;

  ${robotoMedium()};

  ${({ horizontal, color, dividerColor }: TitleProps) => css`
    color: ${color};
    margin-left: ${horizontal ? '24px' : 'auto'};
    margin-right: ${horizontal ? ' unset' : 'auto'};

    &::before {
      content: '';
      display: block;
      width: 96px;
      height: 2px;
      bottom: 0px;
      position: absolute;
      background-color: ${dividerColor};
      left: ${horizontal ? '0px' : '50%'};
      transform: ${horizontal ? 'unset' : 'translateX(-50%)'};
    }
  `};

  @media (max-width: ${MAX_SECTION_WIDTH}px) {
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-left: auto;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 17px;
  color: rgba(0, 0, 0, ${transparency.light.secondaryText});

  ${({ horizontal }: { horizontal: boolean }) => css`
    width: ${horizontal ? '75%' : '100%'};
    padding-top: ${horizontal ? '0px' : '32px'};
  `};

  @media (max-width: ${MAX_SECTION_WIDTH}px) {
    width: 100%;
    padding-top: 32px;
  }
`;
