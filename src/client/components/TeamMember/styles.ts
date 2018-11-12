import styled, { css } from 'styled-components';

import {
  coverImage,
  robotoRegular,
  centerImage,
  shadows,
} from '@client/mixins';
import { icons, transparency } from '@client/constants';

export const Root = styled.a`
  width: 196px;
  padding: 32px 0;
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

  @media (max-width: 1024px) {
    margin-top: 24px;
    margin-left: 0px;

    &:first-child {
      margin-top: 0px;
    }
  }
`;

export const Avatar = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 100%;
  background-color: #fff;
  margin: 0 auto;

  ${coverImage()};

  ${({ url }: { url: string }) => css`
    background-image: url(${url});
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

export const Socials = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  width: 24px;
  height: 24px;
  margin-left: 12px;
  opacity: 0.6;
  will-change: opacity;
  transition: 0.15s opacity;

  ${centerImage('24px', 'auto')};

  ${({ type }: { type: 'facebook' | 'github' | 'instagram' }) => {
    let url;

    if (type === 'facebook') url = icons.facebook;
    if (type === 'github') url = icons.github;
    if (type === 'instagram') url = icons.instagram;

    return css`
      background-image: url(${url});
    `;
  }};

  &:hover {
    opacity: 1;
  }

  &:first-child {
    margin-left: 0px;
  }
`;
