import styled from 'styled-components';

import { transparency } from '~/constants';
import { robotoMedium } from '~/mixins';

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 34px;
  margin: 32px auto 0px auto;
  color: rgba(0, 0, 0, ${transparency.light.primaryText});

  ${robotoMedium()};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 16px auto 0px auto;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 16px;
  color: rgba(0, 0, 0, ${transparency.light.secondaryText});
`;
