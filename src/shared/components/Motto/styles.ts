import styled from 'styled-components';

import { images, CONTENT_WIDTH } from '@shared/constants';
import { gidoleRegular, backImage } from '@shared/mixins';

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
  ${gidoleRegular()};

  @media (max-width: ${CONTENT_WIDTH}px) {
    font-size: 20px;
  }
`;
