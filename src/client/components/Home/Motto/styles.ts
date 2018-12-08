import styled from 'styled-components';

import { images, PRIMARY_COLOR } from '@client/constants';
import { centerImage, gidoleRegular, backImage } from '@client/mixins';

export const Root = styled.section`
  width: 100vw;
  height: 75vh;
  min-height: 688px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
