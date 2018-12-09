import styled, { css } from 'styled-components';

import { CONTENT_WIDTH, transparency } from '@client/constants';
import { shadows, coverImage, robotoRegular } from '@client/mixins';

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${CONTENT_WIDTH}px) {
    flex-direction: column;
  }
`;

export const TeamMemberRoot = styled.a`
  width: 196px;
  padding: 32px 0;
  margin-top: 32px;
  margin-left: 48px;
  border-radius: 4px;
  overflow: hidden;
  box-sizing: content-box;
  cursor: pointer;
  background-color: #fff;
  box-shadow: ${shadows(2)};
  will-change: transform;
  transition: 0.15s ease-out transform;
  -webkit-backface-visibility: hidden;

  &:hover {
    z-index: 10;
    transform: scale(1.25) translateZ(0);
  }

  &:first-child {
    margin-left: 0px;
  }

  @media (max-width: ${CONTENT_WIDTH}px) {
    margin-left: 0px;
  }
`;

export const Avatar = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 100%;
  background-color: #fafafa;
  margin: 0 auto;
  ${coverImage()};

  ${({ src }: { src: string }) => css`
    background-image: url(${src});
  `};
`;

export const Name = styled.div`
  font-size: 18px;
  text-align: center;
  user-select: text;
  margin-top: 16px;
  color: rgba(0, 0, 0, ${transparency.light.primaryText});
  ${robotoRegular()};
`;
