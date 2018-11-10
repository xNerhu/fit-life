import styled, { css } from 'styled-components';

import { coverImage, robotoRegular, centerImage } from '@client/mixins';
import { icons, transparency } from '@client/constants';

export const Root = styled.div`
  width: 196px;
  padding: 16px 8px;
  margin-left: 48px;
  border-radius: 4px;
  box-sizing: content-box;
  cursor: pointer;
  will-change: background-color;
  transition: 0.15s background-color;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
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
  width: 128px;
  height: 128px;
  border-radius: 100%;
  background-color: #fff;
  margin: 0 auto;

  ${coverImage()};

  ${({ url }: { url: string }) => css`
    background-image: url(${url});
  `};
`;

export const Name = styled.div`
  font-size: 20px;
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
