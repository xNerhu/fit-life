import styled, { css } from 'styled-components';

import { fonts } from '@client/constants';
import { body2 } from '@client/mixins';

export const Style = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${fonts.robotoRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url(${fonts.robotoMedium}) format('woff2');
  }

  @font-face {
    font-family: 'Edo';
    font-style: normal;
    font-weight: 400;
    src: url(${fonts.edoRegular}) format('woff2');
  }

  body {
    width: 100vw;
    height: 100vh;
    user-select: none;
    cursor: default;
    margin: 0;
    padding: 0;
    background-color: #fff;
    overflow-x: hidden;
    ${body2()};
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export interface TriangleProps {
  color: string;
  variant: 'bottom-right' | 'top-left';
}

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;

  ${({ color, variant }: TriangleProps) => {
    if (variant === 'top-left') {
      return css`
        border-width: 64px 2000px 0 0;
        border-color: ${color} transparent transparent transparent;
      `;
    }

    return css`
      border-width: 0 0 64px 2000px;
      border-color: transparent transparent ${color} transparent;
    `;
  }};
`;
