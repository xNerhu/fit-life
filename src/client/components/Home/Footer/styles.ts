import styled, { css } from 'styled-components';

import { PRIMARY_COLOR } from '@client/constants';
import { centerImage } from '@client/mixins';

export const Root = styled.footer`
  margin-top: 32px;
`;

export const SocialLinks = styled.div`
  width: 100vw;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PRIMARY_COLOR};
`;

export const Icon = styled.a`
  width: 96px;
  height: 96px;
  will-change: transform;
  transition: 0.15s ease-out transform;
  -webkit-backface-visibility: hidden;
  ${centerImage('32px', 'auto')};

  ${({ src }: { src: string }) => css`
    background-image: url(${src});
  `};

  &:hover {
    transform: scale(1.5);
  }

  &:first-child {
    margin-left: 0px;
  }
`;

export const Copyright = styled.div`
  width: 100vw;
  text-align: center;
  padding: 24px 0px;
  background-color: #424242;
  color: #fff;
  font-size: 15px;
`;

export const Link = styled.a`
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;
