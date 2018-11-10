import { css } from 'styled-components';

import { fonts } from '@client/constants';
import { body2 } from '@client/mixins';

export const Style = css`
  @font-face {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    src: url(${fonts.robotoRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    src: url(${fonts.robotoMedium}) format('woff2');
  }

  @font-face {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    src: url(${fonts.robotoLight}) format('woff2');
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
    background-color: #f5f5f5;
    overflow-x: hidden;
    ${body2()};
  }

  * {
    box-sizing: border-box;
  }
`;
