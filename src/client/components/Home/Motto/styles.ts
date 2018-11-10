import styled from 'styled-components';

import { images, PRIMARY_COLOR } from '@client/constants';
import { coverImage, centerImage, gidoleRegular } from '@client/mixins';

export const Root = styled.div`
  width: 100vw;
  height: 75vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-position: center;
    background-attachment: fixed;
    background-image: url(${images.road});

    ${coverImage()};
  }
`;

export const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 64px 96px 0 96px;
  border-color: ${PRIMARY_COLOR} transparent transparent transparent;
`;

export const Text = styled.div`
  margin-top: 64px;
  color: #fff;
  font-size: 24px;
  text-align: center;

  ${gidoleRegular()}
`;

export const Logo = styled.div`
  width: 196px;
  height: 196px;
  margin: 24px auto;
  background-image: url(${images.logo2});

  ${centerImage('100%', 'auto')};
`;
