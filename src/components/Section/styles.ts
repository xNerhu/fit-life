import styled, { css } from 'styled-components';

import { transparency, PRIMARY_COLOR } from '~/constants';
import { robotoMedium, centerHorizontal } from '~/mixins';

export const Root = styled.section`
  width: 100%;
  max-width: 1072px;
  margin: 48px auto 0px auto;
  display: flex;

  ${({ vertical }: { vertical: boolean }) => css`
    flex-direction: ${vertical ? 'column' : 'row'};
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

  ${({ vertical }: { vertical: boolean }) => css`
    margin-left: ${vertical ? 'auto' : '24px'};
    margin-right: ${vertical ? ' auto' : 'unset'};
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
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  font-size: 17px;
  color: rgba(0, 0, 0, ${transparency.light.secondaryText});

  ${({ vertical }: { vertical: boolean }) => css`
    width: ${vertical ? '100%' : '75%'};
    padding-top: ${vertical ? '24px' : '0px'};
  `};

  @media (max-width: 1024px) {
    width: 100%;
    padding-top: 24px;
  }
`;
