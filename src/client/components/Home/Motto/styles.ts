import styled from 'styled-components';

import { images } from '@client/constants';
import { centerImage, gidoleRegular, backImage } from '@client/mixins';

export const Root = styled.div`
  width: 100vw;
  height: 75vh;
  min-height: 656px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    ${backImage(images.road)};
  }
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
