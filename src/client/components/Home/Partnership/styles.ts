import styled, { css } from 'styled-components';

import { PRIMARY_COLOR } from '@client/constants';

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
  background-color: ${PRIMARY_COLOR};
`;

export const Container = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  min-width: 96px;
  height: 96px;
  cursor: pointer;
  user-select: none;

  ${({ filter }: { filter?: boolean }) => css`
    filter: ${filter ? 'brightness(0) invert(0)' : 'unset'};
  `};
`;
