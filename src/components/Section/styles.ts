import styled, { css } from 'styled-components';

import { transparency } from '~/constants';
import { robotoMedium } from '~/mixins';

export const Root = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 96px auto 96px auto;
  display: flex;

  ${({ vertical }: { vertical: boolean }) => css`
    flex-direction: ${vertical ? 'column' : 'row'};
  `};
`;

export const Title = styled.div`
  font-size: 34px;
  color: rgba(0, 0, 0, ${transparency.light.primaryText});

  ${({ vertical }: { vertical: boolean }) => css`
    margin-left: ${vertical ? 'auto' : '24px'};
    margin-right: ${vertical ? ' auto' : 'unset'};
  `};

  ${robotoMedium()};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 17px;
  color: rgba(0, 0, 0, ${transparency.light.secondaryText});

  ${({ vertical }: { vertical: boolean }) => css`
    padding-top: ${vertical ? '24px' : '0px'};
  `};
`;
