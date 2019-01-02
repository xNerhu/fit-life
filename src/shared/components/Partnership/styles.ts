import styled from 'styled-components';

import { CONTENT_WIDTH } from '@shared/constants';

export const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: ${CONTENT_WIDTH}px) {
    flex-direction: column;
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

  @media (max-width: ${CONTENT_WIDTH}px) {
    margin-top: 32px;
    margin-left: 0px;

    &:first-child {
      margin-top: 0px;
    }
  }
`;
