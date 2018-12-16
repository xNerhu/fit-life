import styled, { css } from 'styled-components';

import { robotoMedium, centerImage } from '@client/mixins';
import { CONTENT_WIDTH, PRIMARY_COLOR } from '@client/constants';

export const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: ${CONTENT_WIDTH}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ItemRoot = styled.div`
  max-width: 288px;
  margin-top: 32px;
  margin-left: 164px;

  &:first-child {
    margin-left: 0px;
  }

  @media (max-width: ${CONTENT_WIDTH}px) {
    margin-left: 0px;
  }
`;

export const ItemIcon = styled.svg`
  width: 64px;
  height: 64px;
  ${centerImage('100%', 'auto')};

  ${({ src }: { src: string }) => css`
    background-image: url(${src});
  `};
`;

export const ItemTitle = styled.div`
  margin-top: 8px;
  font-size: 20px;
  ${robotoMedium()};
`;

export const ItemContent = styled.div`
  margin-top: 8px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.79);
`;

export const Link = styled.a`
  color: ${PRIMARY_COLOR};
  text-decoration: underline;
  ${robotoMedium()};

  &:hover {
    color: #64dd17;
  }
`;
