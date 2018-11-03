import styled, { css } from 'styled-components';

import { transparency, PRIMARY_COLOR } from '~/constants';
import { robotoMedium, centerHorizontal } from '~/mixins';

export const Root = styled.section`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 64px;
  display: flex;

  ${({ horizontal }: { horizontal: boolean }) => css`
    flex-direction: ${horizontal ? 'row' : 'column'};
  `};

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  height: fit-content;
  position: relative;
  padding-bottom: 24px;
  font-size: 34px;
  color: rgba(0, 0, 0, ${transparency.light.primaryText});

  ${robotoMedium()};

  ${({ horizontal }: { horizontal: boolean }) => css`
    margin-left: ${horizontal ? '24px' : 'auto'};
    margin-right: ${horizontal ? ' unset' : 'auto'};
  `};

  &::before {
    content: '';
    display: block;
    width: 96px;
    height: 2px;
    bottom: 0px;
    position: absolute;
    background-color: ${PRIMARY_COLOR};

    ${centerHorizontal()};
  }

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-left: auto;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 17px;
  color: rgba(0, 0, 0, ${transparency.light.secondaryText});

  ${({ horizontal }: { horizontal: boolean }) => css`
    width: ${horizontal ? '75%' : '100%'};
    padding-top: ${horizontal ? '0px' : '24px'};
  `};

  @media (max-width: 1024px) {
    width: 100%;
    padding-top: 24px;
  }
`;
