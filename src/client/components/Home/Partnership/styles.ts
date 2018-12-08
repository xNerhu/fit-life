import styled from 'styled-components';

import { CONTENT_WIDTH } from '@client/constants';

export const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: ${CONTENT_WIDTH}px) {
    justify-content: center;
    padding-right: 0px;
  }
`;

export const Partner = styled.img`
  height: 148px;
  user-select: none;
  cursor: pointer;
`;
