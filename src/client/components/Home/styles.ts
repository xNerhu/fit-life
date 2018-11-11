import styled, { css } from 'styled-components';

import { PRIMARY_COLOR } from '@client/constants';

export const SecondBackground = styled.div`
  width: 100%;
  background-color: #fafafa;
  margin-top: 64px;
  padding-bottom: 24px;
`;

export const LimeBackground = styled.div`
  width: 100%;
  background-color: ${PRIMARY_COLOR};
`;

export const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 64px 96px 0 96px;
  margin: 0 auto;

  ${({ color }: { color: string }) => css`
    border-color: ${color} transparent transparent transparent;
  `};
`;
