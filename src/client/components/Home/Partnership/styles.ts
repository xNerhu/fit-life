import styled from 'styled-components';

import { CONTENT_WIDTH } from '@client/constants';

export const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;

  @media (max-width: ${CONTENT_WIDTH}px) {
    justify-content: center;
    padding-right: 0px;
  }
`;

export const Partner = styled.img`
  height: 196px;
  user-select: none;
  margin-left: 48px;
  cursor: pointer;

  &:first-child {
    margin-left: 0px;
  }
`;
