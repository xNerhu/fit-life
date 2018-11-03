import styled, { css } from 'styled-components';

import { coverImage, robotoRegular, centerImage } from '~/mixins';
import { icons } from '~/constants';

export const Root = styled.div`
  width: 256px;

  @media (max-width: 1024px) {
    margin-top: 24px;

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

  ${robotoRegular()};
`;

export const Socials = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;

export const Social = styled.a`
  width: 24px;
  height: 24px;
  margin-left: 12px;

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

  &:first-child {
    margin-left: 0px;
  }
`;
