import styled, { css } from 'styled-components';

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
